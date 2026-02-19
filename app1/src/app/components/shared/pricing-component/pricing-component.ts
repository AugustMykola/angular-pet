import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PricingCardComponent } from './pricing-card/pricing-card';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ButtonModule,CommonModule, PricingCardComponent],
  templateUrl: './pricing-component.html',
  styleUrls: ['./pricing-component.scss'],
})
export class PricingComponent {


pricingPlans = [
  {
    name: 'Basic',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    price: '$9',
    features: ['Arcu vitae elementum', 'Dui faucibus in ornare', 'Morbi tincidunt augue']
  },
  {
    name: 'Professional',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    price: '$29',
    features: ['Arcu vitae elementum', 'Dui faucibus in ornare', 'Morbi tincidunt augue', 'Duis ultricies lacus']
  },
  {
    name: 'Enterprise',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    price: '$99',
    features: ['Arcu vitae elementum', 'Dui faucibus in ornare', 'Morbi tincidunt augue', 'Duis ultricies lacus', 'Premium support']
  }
];

}
