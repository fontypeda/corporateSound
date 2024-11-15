import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module1-bedeutung',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './module1-bedeutung.component.html',
  styleUrl: './module1-bedeutung.component.scss',
})
export class Module1BedeutungComponent {
  images?: any[] | undefined;
  responsiveOptions?: any[] | undefined;
  showImages = false;

  constructor() {
    this.images = [
      {
        itemImageSrc: 'assets/Module1Bedeutung/drum.jpg',
        thumbnailImageSrc: 'assets/Module1Bedeutung/drum.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/Module1Bedeutung/bell.jpg',
        thumbnailImageSrc: 'assets/Module1Bedeutung/bell.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ];
  }

  toggleImages() {
    this.showImages = !this.showImages;
  }
}
