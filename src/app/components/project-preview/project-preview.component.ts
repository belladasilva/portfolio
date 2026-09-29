import { Component, input } from '@angular/core';
import { ProjectPreviewKind } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
})
export class ProjectPreviewComponent {
  readonly preview = input.required<ProjectPreviewKind>();
}
