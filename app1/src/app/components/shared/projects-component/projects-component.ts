import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './projects-card/project-card';
@Component({
  selector: 'app-projects-component',
  imports: [CommonModule, RouterModule, ProjectCardComponent],
  templateUrl: './projects-component.html',
  styleUrls: ['./projects-component.scss'],
})
export class ProjectsComponent {
  projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: './images/logo2.jpg'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Adipisicing elit sed do eiusmod tempor.',
    image: './images/logo2.jpg'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Incididunt ut labore et dolore magna.',
    image: './images/logo2.jpg'
  }
];
}
