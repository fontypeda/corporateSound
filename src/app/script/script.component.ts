// script.component.ts

import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import {
  LESSON_MODULES,
  LessonModule,
  Comment,
  ModuleSection,
} from '../lesson-data';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-script',
  standalone: true,
  imports: [DialogModule, CommonModule, ButtonModule],
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss'],
})
export class ScriptComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChildren('sectionElements') sectionElements!: QueryList<ElementRef>;

  LESSON_MODULES = LESSON_MODULES; // Verwenden der importierten Daten

  displayDialog = false;
  selectedSlide: any = null;

  visibleSectionId: number | null = null;
  currentComments: Comment[] = [];

  ngAfterViewInit() {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '0px',
      threshold: [0.1, 0.5, 0.9],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = Number(
            entry.target.getAttribute('data-section-id')
          );
          this.visibleSectionId = sectionId;
          this.updateCurrentComments();
        }
      });
    }, options);

    this.sectionElements.forEach((sectionElement) =>
      observer.observe(sectionElement.nativeElement)
    );

    // Scroll- und Resize-Listener, um bei Änderungen zu aktualisieren
    this.scrollContainer.nativeElement.addEventListener('scroll', () =>
      this.checkVisibleSection()
    );
    window.addEventListener('resize', () => this.checkVisibleSection());
  }

  checkVisibleSection() {
    let closestSectionId = null;
    let closestOffset = Number.POSITIVE_INFINITY;

    this.sectionElements.forEach((section) => {
      const sectionId = Number(
        section.nativeElement.getAttribute('data-section-id')
      );
      const offsetTop = section.nativeElement.getBoundingClientRect().top;

      if (Math.abs(offsetTop) < closestOffset) {
        closestOffset = Math.abs(offsetTop);
        closestSectionId = sectionId;
      }
    });

    if (closestSectionId !== this.visibleSectionId) {
      this.visibleSectionId = closestSectionId;
      this.updateCurrentComments();
    }
  }

  updateCurrentComments() {
    if (this.visibleSectionId !== null) {
      // Finde das Modul, das die aktuelle Sektion enthält
      let foundModule: LessonModule | undefined;
      for (const module of this.LESSON_MODULES) {
        if (module.sections.some((s) => s.id === this.visibleSectionId)) {
          foundModule = module;
          break;
        }
      }

      if (foundModule) {
        // Filtere die Kommentare für die aktuelle Sektion
        this.currentComments = foundModule.comments.filter(
          (comment) => comment.slide === this.visibleSectionId
        );
      } else {
        this.currentComments = [];
      }
    } else {
      this.currentComments = [];
    }
  }

  openSlidePreview(sectionId: number) {
    // Finde die Sektion mit der entsprechenden ID
    let foundSection: ModuleSection | undefined;
    for (const module of this.LESSON_MODULES) {
      foundSection = module.sections.find((s) => s.id === sectionId);
      if (foundSection) {
        break;
      }
    }

    if (foundSection) {
      this.selectedSlide = foundSection; // Das gesamte Objekt speichern
      this.displayDialog = true;
    } else {
      this.displayDialog = false;
    }
  }

  scrollToSection(sectionId: number) {
    const targetElement = this.sectionElements.find(
      (section) =>
        section.nativeElement.getAttribute('data-section-id') ==
        sectionId.toString()
    );
    if (targetElement) {
      targetElement.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
