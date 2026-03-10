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
      title: 'Builds for Developers',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      icon: 'pi pi-desktop',
    },
    {
      id: 2,
      title: 'End-To-End Encrypted',
      description: 'Adipisicing elit sed do eiusmod tempor.',
      icon: 'pi pi-unlock',
    },
    {
      id: 3,
      title: 'Fast & Global Support',
      description: 'Incididunt ut labore et dolore magna.',
      icon: 'pi pi-globe',
    },
    {
      id: 4,
      title: 'Open Source',
      description: 'Incididunt ut labore et dolore magna.',
      icon: 'pi pi-github',
    },
    {
      id: 5,
      title: 'Easy to Use',
      description: 'Incididunt ut labore et dolore magna.',
      icon: 'pi pi-face-smile',
    },
    {
      id: 6,
      title: 'Trusted Security',
      description: 'Incididunt ut labore et dolore magna.',
      icon: 'pi pi-shield',
    },
  ];
}
