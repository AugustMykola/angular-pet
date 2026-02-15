import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../../shared/projects-component/projects-component';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsComponent],
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent {}
