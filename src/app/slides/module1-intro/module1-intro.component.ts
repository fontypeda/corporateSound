import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

interface AudioExample {
  file?: string;
  logo?: string;
  brand?: string;
  type?: string;
}

@Component({
  selector: 'app-module1-intro',
  standalone: true,
  imports: [AnimateOnScrollModule, CommonModule, ButtonModule, DialogModule],
  templateUrl: './module1-intro.component.html',
  styleUrl: './module1-intro.component.scss',
})
export class Module1IntroComponent {
  audioExamples: AudioExample[] = [
    {
      file: '/assets/audiologos/mcdonalds.mp3',
      logo: '/assets/audiologos/mcdonalds.jpg',
      brand: 'McDonalds',
    },
    {
      file: '/assets/audiologos/telekom.mp3',
      logo: '/assets/audiologos/telekom.jpg',
      brand: 'Telekom',
    },
    {
      file: '/assets/audiologos/intel.mp3',
      logo: '/assets/audiologos/intel.jpg',
      brand: 'Intel',
    },
    {
      file: '/assets/audiologos/hornbach.mp3',
      logo: '/assets/audiologos/hornbach.jpg',
      brand: 'Hornbach',
    },
    {
      file: '/assets/audiologos/20century.mp3',
      logo: '/assets/audiologos/20century.jpg',
      brand: 'Twenty Century Fox',
    },
    {
      file: '/assets/audiologos/tui.mp3',
      logo: '/assets/audiologos/tui.jpg',
      brand: 'Tui',
    },
    {
      file: '/assets/audiologos/samsung.mp3',
      logo: '/assets/audiologos/samsung.jpg',
      brand: 'Samsung',
    },
    {
      file: '/assets/audiologos/dreamworks.mp3',
      logo: '/assets/audiologos/dreamworks.jpg',
      brand: 'Dreamworks',
    },
    {
      file: '/assets/audiologos/lufthansa.mp3',
      logo: '/assets/audiologos/lufthansa.jpg',
      brand: 'Lufthansa',
    },
    {
      file: '/assets/audiologos/thx.mp3',
      logo: '/assets/audiologos/thx.jpg',
      brand: 'THX',
    },
  ];

  displayDialog: boolean = false;
  selectedAudio: AudioExample | null = null;

  showDialog(audio: AudioExample): void {
    this.selectedAudio = audio;
    this.displayDialog = true;
  }
}
