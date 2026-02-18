import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ButtonModule,CommonModule],
  templateUrl: './pricing-component.html',
  styleUrls: ['./pricing-component.scss'],
})
export class PricingComponent {

  
}
