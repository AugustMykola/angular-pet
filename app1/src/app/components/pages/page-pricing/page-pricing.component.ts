import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricingComponent } from '../../shared/pricing-component/pricing-component';

@Component({
  selector: 'app-page-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, PricingComponent],
  templateUrl: './page-pricing.component.html',
  styleUrls: ['./page-pricing.component.scss'],
})
export class PagePricingComponent {}
