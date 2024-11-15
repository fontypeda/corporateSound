import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-module3-zusammenfassung',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './module3-zusammenfassung.component.html',
  styleUrl: './module3-zusammenfassung.component.scss',
})
export class Module3ZusammenfassungComponent {
  keywords = [
    {
      title: 'Touchpoints der Markenkommunikation',
      description:
        'Identifikation von Berührungspunkten, an denen Marken durch Sound mit Konsumenten interagieren.',
    },
    {
      title: 'Kriterien für effektiven Corporate Sound',
      description:
        'Wichtige Merkmale eines erfolgreichen Corporate Sounds wie Prägnanz, Flexibilität und Markenpassung.',
    },
    {
      title: 'Beispiele für Flexibilität und Anpassungsfähigkeit',
      description:
        'Unterschiedliche Flexibilität bei Sound Logos: Telekom passt den Sound für Weihnachtswerbung an, Audi bleibt starr.',
    },
    {
      title:
        'Case Studies: Erfolgreiche und weniger erfolgreiche Corporate Sounds',
      description:
        'Analyse bekannter Fallstudien wie McDonald’s, BMW, Audi und Mercedes und deren Erfolgsfaktoren im Sound Branding.',
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
