import { Component, input } from '@angular/core';
import { Experience } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { sectionText } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience-section',
  imports: [RevealDirective],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  readonly items = input.required<Experience[]>();
  protected readonly sectionText = sectionText;
}
