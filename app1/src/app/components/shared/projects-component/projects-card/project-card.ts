import { Component ,input} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Project } from "../../../../models";
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  imports: [ButtonModule, CommonModule]
})
export class ProjectCardComponent {
readonly  project = input.required<Project>();
}
