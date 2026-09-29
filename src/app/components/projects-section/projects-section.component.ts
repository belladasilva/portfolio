import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { sectionText } from '../../data/portfolio.data';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';

@Component({
  selector: 'app-projects-section',
  imports: [RevealDirective, NgOptimizedImage, ProjectPreviewComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  readonly projects = input.required<Project[]>();
  readonly githubUrl = input.required<string>();
  protected readonly sectionText = sectionText;
}
