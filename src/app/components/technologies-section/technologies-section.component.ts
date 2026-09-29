import { Component, input } from '@angular/core';
import { TechnologyGroup } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { sectionText } from '../../data/portfolio.data';

@Component({
  selector: 'app-technologies-section',
  imports: [RevealDirective],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.scss',
})
export class TechnologiesSectionComponent {
  readonly groups = input.required<TechnologyGroup[]>();
  protected readonly sectionText = sectionText;
}
