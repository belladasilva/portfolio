import { Component, input } from '@angular/core';
import { WorkflowStep } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { sectionText } from '../../data/portfolio.data';

@Component({
  selector: 'app-work-section',
  imports: [RevealDirective],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
})
export class WorkSectionComponent {
  readonly steps = input.required<WorkflowStep[]>();
  protected readonly sectionText = sectionText;
}
