import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module2-elemente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module2-elemente.component.html',
  styleUrl: './module2-elemente.component.scss',
})
export class Module2ElementeComponent {
  currentViewIndex = 0;
  totalViews = 2; // Passen Sie diese Zahl an die Anzahl Ihrer Ansichten an

  // Daten für die Markenelemente mit Audiodateien
  brandElements = [
    {
      title: 'Audiologo',
      description: 'Ein prägnantes, einprägsames Soundlogo.',
      example: 'Telekom',
      audioSrc: 'assets/audiologos/telekom.mp3',
    },
    {
      title: 'Jingle',
      description: 'Ein gesungener Werbeslogan, der ein Produkt hervorhebt.',
      example: 'Milka',
      audioSrc: 'assets/audiologos/milka.mp3',
    },
    {
      title: 'Markenstimme',
      description: 'Eine unverwechselbare Stimme, die Vertrauen schafft.',
      example: 'VW "Das Auto"',
      audioSrc: 'assets/audiologos/vw.mp3',
    },
    {
      title: 'Markenlied',
      description: 'Ein Lied, das für eine Marke steht.',
      example: '„Like Ice in the Sunshine“ von Langnese',
      audioSrc: 'assets/audiologos/langnese.mp3',
    },
    {
      title: 'Soundscape',
      description:
        'Ein atmosphärischer Klangraum für Verkaufsräume oder Telefonansagen.',
      example: 'Bayer',
      audioSrc: '',
    },
    {
      title: 'Brand Sounds / Sound Icons',
      description:
        'Kurze, charakteristische Klänge, die eine Marke repräsentieren.',
      example: 'Skype',
      audioSrc: 'assets/audiologos/skype.mp3',
    },
  ];

  nextView() {
    this.currentViewIndex = (this.currentViewIndex + 1) % this.totalViews;
  }
}
