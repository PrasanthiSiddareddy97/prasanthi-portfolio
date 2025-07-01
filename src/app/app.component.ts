import { AboutComponent } from "./selection/about/about.component";
import { Component } from '@angular/core';
import { ContactComponent } from "./selection/contact/contact.component";
import { HeroComponent } from "./selection/hero/hero.component";
import { NavbarComponent } from "./selection/navbar/navbar.component";
import { PortfolioComponent } from "./selection/portfolio/portfolio.component";
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "./selection/services/services.component";
import { SkillsComponent } from "./selection/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, ContactComponent, PortfolioComponent, ServicesComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prasanthi-portfolio';
}
