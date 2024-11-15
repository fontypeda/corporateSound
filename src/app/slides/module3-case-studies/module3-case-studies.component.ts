import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-module3-case-studies',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './module3-case-studies.component.html',
  styleUrl: './module3-case-studies.component.scss',
})
export class Module3CaseStudiesComponent {
  currentViewIndex = 0;
  totalViews = 4;
  visible: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  nextView() {
    this.currentViewIndex = (this.currentViewIndex + 1) % this.totalViews;
  }

  showDialog() {
    this.visible = true;
  }

  showDialog2() {
    this.visible2 = true;
  }

  showDialog3() {
    this.visible3 = true;
  }

  showDialog4() {
    this.visible4 = true;
  }
}
