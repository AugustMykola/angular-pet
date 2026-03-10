import { Component, input } from "@angular/core";
import { Project } from "../../../../models";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
