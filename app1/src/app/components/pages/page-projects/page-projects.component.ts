import { Component } from '@angular/core';
import { ProjectsComponent } from '../../shared/projects-component/projects-component';

@Component({
  selector: 'app-page-projects',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent {}
