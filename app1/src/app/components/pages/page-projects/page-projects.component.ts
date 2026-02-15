import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../../shared/projects-component/projects-component';

@Component({
  selector: 'app-page-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsComponent],
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent {}
