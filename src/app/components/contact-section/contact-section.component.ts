import { Component, input } from '@angular/core';
import { ContactData } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  imports: [RevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  readonly contact = input.required<ContactData>();
}
