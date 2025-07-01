import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Build responsive and dynamic websites with Angular and Bootstrap.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Mobile-first interfaces with modern design principles.'
    },
    {
      icon: 'fas fa-database',
      title: 'API Integration',
      description: 'REST API and backend integration with Node.js or Firebase.'
    }
  ];

}
