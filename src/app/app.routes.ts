import { AboutComponent } from "./selection/about/about.component";
import { ContactComponent } from "./selection/contact/contact.component";
import { Routes } from "@angular/router";
import { SkillsComponent } from "./selection/skills/skills.component";

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skils', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];
