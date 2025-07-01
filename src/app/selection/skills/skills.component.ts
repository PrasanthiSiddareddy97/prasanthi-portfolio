import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  skills: string[] = ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Angular Material', 'NgRx', 'Git', 'RESTful APIs'];
}
