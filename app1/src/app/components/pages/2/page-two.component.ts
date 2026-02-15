import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricingComponent } from '../../shared/pricing-component/pricing-component';
@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [CommonModule, RouterModule, PricingComponent],
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent {}
