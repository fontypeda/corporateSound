import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module1-zusammenfassung',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './module1-zusammenfassung.component.html',
  styleUrl: './module1-zusammenfassung.component.scss',
})
export class Module1ZusammenfassungComponent {
  keywords = [
    {
      title: 'Die Macht des Klangs in der Markenkommunikation',
      description:
        'Klang als entscheidender Faktor für Markenidentität und Kundenbindung.',
    },
    {
      title: 'Historische Bedeutung von Klängen',
      description:
        'Von Kirchenglocken bis zu modernen Soundlogos – Klänge prägen unsere Wahrnehmung.',
    },
    {
      title: 'Psychologie der Kaufentscheidung und auditive Einflüsse',
      description: 'Wie Musik unser Kaufverhalten unbewusst beeinflusst.',
    },
  ];

  displayedKeywords: any[] = [];
  currentIndex = 0;

  showNextKeyword() {
    if (this.currentIndex < this.keywords.length) {
      this.displayedKeywords.push(this.keywords[this.currentIndex]);
      this.currentIndex++;
    }
  }
}
