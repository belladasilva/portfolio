import { Component, input } from '@angular/core';
import { AboutData } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  imports: [RevealDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  readonly about = input.required<AboutData>();
}
