import { Component } from '@angular/core';
import { PricingComponent } from '../../shared/pricing-component/pricing-component';

@Component({
  selector: 'app-page-pricing',
  standalone: true,
  imports: [PricingComponent],
  templateUrl: './page-pricing.component.html',
  styleUrls: ['./page-pricing.component.scss'],
})
export class PagePricingComponent {}
