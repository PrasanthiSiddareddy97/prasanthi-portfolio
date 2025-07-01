import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal site built with Angular and Bootstrap.',
      link: 'https://yourportfolio.netlify.app'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin panel with charts, orders, and analytics.',
      link: 'https://github.com/yourname/ecommerce-dashboard'
    }
  ];

}
