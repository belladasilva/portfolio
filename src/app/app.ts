import { Component, signal } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { StartupScreenComponent } from './components/startup-screen/startup-screen.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import {
  aboutData,
  contactData,
  experienceItems,
  heroData,
  heroCode,
  navLinks,
  projectItems,
  technologyGroups,
  workflowSteps,
} from './data/portfolio.data';

@Component({
  imports: [
    NavbarComponent,
    StartupScreenComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    WorkSectionComponent,
    TechnologiesSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly isBooting = signal(this.shouldShowBootScreen());
  protected readonly navLinks = navLinks;
  protected readonly heroData = heroData;
  protected readonly heroCode = heroCode;
  protected readonly aboutData = aboutData;
  protected readonly experienceItems = experienceItems;
  protected readonly projectItems = projectItems;
  protected readonly workflowSteps = workflowSteps;
  protected readonly technologyGroups = technologyGroups;
  protected readonly contactData = contactData;

  protected onStartupDone(): void {
    this.markBootAsSeen();
    this.isBooting.set(false);
  }

  private shouldShowBootScreen(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    const alreadySeen = window.sessionStorage.getItem('portfolio-intro-seen') === 'true';
    const reducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return !alreadySeen && !reducedMotion;
  }

  private markBootAsSeen(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem('portfolio-intro-seen', 'true');
  }
}
