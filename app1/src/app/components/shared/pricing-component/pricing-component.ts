import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PricingCardComponent } from './pricing-card/pricing-card';
import { PricingCardRightHalfComponent } from './pricing-card/pricing-card-right-half/pricing-card-right-half';
import { PricingPlan } from '../../../models';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ButtonModule, CommonModule, PricingCardComponent, PricingCardRightHalfComponent] ,
  templateUrl: './pricing-component.html',
  styleUrls: ['./pricing-component.scss'],
})
export class PricingComponent {
  pricingPlans = [
    {
      id: 0,
      name: 'Basic',
      shortDescription: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      features: ['Arcu vitae elementum', 'Dui faucibus in ornare', 'Morbi tincidunt augue'],
      duration: 'month',
      price: '$9',
      icon: 'pi pi-pencil',
    },
    {
      id: 1,
      name: 'Professional',
      shortDescription: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      features: [
        'Arcu vitae elementum',
        'Dui faucibus in ornare',
        'Morbi tincidunt augue',
        'Duis ultricies lacus',
      ],
      duration: 'month',
      price: '$29',
      icon: 'pi pi-palette',
    },
    {
      id: 2,
      name: 'Enterprise',
      shortDescription: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      features: [
        'Arcu vitae elementum',
        'Dui faucibus in ornare',
        'Morbi tincidunt augue',
        'Duis ultricies lacus',
        'Premium support',
      ],
      duration: 'month',
      price: '$99',
      icon: 'pi pi-image',
    },
  ];
  activeCardId = signal(this.pricingPlans[0].id);
  selectedPlan: PricingPlan = this.pricingPlans[0];
  selectPlan(id: number) {
    this.activeCardId.set(id);
    this.selectedPlan = this.pricingPlans.find((plan) => plan.id === id) || this.pricingPlans[0];
  }
}
