import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-module3-kriterien',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module3-kriterien.component.html',
  styleUrl: './module3-kriterien.component.scss',
})
export class Module3KriterienComponent {
  currentViewIndex = 0;
  totalViews = 3;
  nextView() {
    this.currentViewIndex = (this.currentViewIndex + 1) % this.totalViews;
  }
}
