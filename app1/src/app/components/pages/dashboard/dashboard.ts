import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PricingComponent } from '../../shared/pricing-component/pricing-component';
import { ProjectsComponent } from '../../shared/projects-component/projects-component';
import { ContactComponent } from '../../shared/contact-component/contact-component';
@Component({
  selector: 'simple-centered',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, PricingComponent, ContactComponent, ProjectsComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {}
