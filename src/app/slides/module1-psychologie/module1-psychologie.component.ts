import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module1-psychologie',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './module1-psychologie.component.html',
  styleUrl: './module1-psychologie.component.scss',
})
export class Module1PsychologieComponent {
  // Gesamtanzahl der Ansichten
  totalViews = 3; // Passen Sie diese Zahl an die Anzahl Ihrer Ansichten an
  currentViewIndex = 0;

  // Methode zum Wechseln zur nächsten Ansicht
  nextView() {
    this.currentViewIndex = (this.currentViewIndex + 1) % this.totalViews;
  }
}
