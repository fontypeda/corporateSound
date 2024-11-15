import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { LESSON_MODULES } from '../lesson-data';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    ProgressBarModule,
    DividerModule,
    CommonModule,
    AnimateOnScrollModule,
  ],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  slides = LESSON_MODULES.flatMap((module) =>
    module.sections.map((section) => ({
      id: section.id,
      title: module.title,
      subtitle: section.subtitle || section.title,
      component: section.component,
      description: section.description,
      color: module.color, // Nutze die Modulfarbe
    }))
  );

  currentSlide: number = 0;
  progress: number = 0;
  isNavOpen: boolean = false;

  ngAfterViewInit() {
    this.updateProgress();
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const slideHeight = window.innerHeight;
    const newCurrentSlide = Math.round(scrollTop / slideHeight);
    if (newCurrentSlide !== this.currentSlide) {
      this.currentSlide = newCurrentSlide;
      this.updateProgress();
    }
  }

  scrollToSlide(index: number) {
    const container = this.scrollContainer.nativeElement;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
    this.isNavOpen = false;
  }

  updateProgress() {
    this.progress = Math.round(
      ((this.currentSlide + 1) / this.slides.length) * 100
    );
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      this.goToNextSlide();
    } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      this.goToPreviousSlide();
    }
  }

  goToNextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.scrollToSlide(this.currentSlide);
    }
  }

  goToPreviousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.scrollToSlide(this.currentSlide);
    }
  }
}
