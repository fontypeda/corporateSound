import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-module2-zusammenfassung',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './module2-zusammenfassung.component.html',
  styleUrl: './module2-zusammenfassung.component.scss',
})
export class Module2ZusammenfassungComponent {
  keywords = [
    {
      title: 'Bedeutung von Corporate Sound',
      description:
        'Corporate Sound schafft eine emotionale Verbindung und stärkt die Markenidentität.',
    },
    {
      title: 'Vergleich von visuellen und auditiven Markenidentitäten',
      description:
        'Auditiver Markenauftritt ist weniger verbreitet, gewinnt jedoch zunehmend an Bedeutung.',
    },
    {
      title: 'Die Werkzeuge des Corporate Sound',
      description:
        '6 Markenelemente wie Jingles, Soundlogos und Markenstimmen prägen den Corporate Sound.',
    },
    {
      title: 'Unterschied zwischen visueller und auditiver Markenkommunikation',
      description:
        'Die Umsetzung auditiver Identität erfordert andere kreative Ansätze als visuelle Identität.',
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
