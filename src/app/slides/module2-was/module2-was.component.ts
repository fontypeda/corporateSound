import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-module2-was',
  standalone: true,
  imports: [CommonModule, ChartModule, OrganizationChartModule, CardModule],
  templateUrl: './module2-was.component.html',
  styleUrl: './module2-was.component.scss',
})
export class Module2WasComponent {
  currentViewIndex = 0;
  totalViews = 2;

  // Daten für das Diagramm der Markenanmeldungen
  registrationData: any;
  registrationOptions: any;

  // Daten für das Wachstum der Soundlogos über die Jahre
  growthData: any;
  growthOptions: any;

  data: TreeNode[] = [
    {
      label: 'Corporate Identity',
      expanded: true,
      children: [
        {
          label: 'Corporate Design ',
          expanded: true,
        },
        {
          label: 'Corporate Sound',
          expanded: true,
        },
      ],
    },
  ];

  constructor() {
    this.initializeRegistrationChart();
    this.initializeGrowthChart();
  }

  nextView() {
    this.currentViewIndex = (this.currentViewIndex + 1) % this.totalViews;
  }

  initializeRegistrationChart() {
    this.registrationData = {
      labels: ['Visuelle Markenlogos', 'Sound Logos'],
      datasets: [
        {
          data: [60000, 6],
          backgroundColor: ['#42A5F5', '#66BB6A'],
        },
      ],
    };

    this.registrationOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  initializeGrowthChart() {
    // Beispielhafte Daten; ersetzen Sie diese durch echte Daten, wenn verfügbar
    this.growthData = {
      labels: [
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
      ],
      datasets: [
        {
          label: 'Anzahl der Hörmarken-Registrierungen',
          data: [7, 5, 11, 8, 5, 9, 13, 10, 12, 12, 14, 10, 6],
          fill: false,
          borderColor: '#FFA726',
          tension: 0.4,
        },
      ],
    };

    this.growthOptions = {
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  }
}
