import { Component, input, output } from '@angular/core';
import { PricingPlan } from '../../../../models';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.html',
  styleUrls: ['./pricing-card.scss'],
  imports: [ButtonModule, CommonModule],
})
export class PricingCardComponent {
  readonly plan = input.required<PricingPlan>();
  readonly isActive = input<boolean>();
  
  readonly onSelectPlan = output<number>();

  protected setActiveCardById() {
    this.onSelectPlan.emit(this.plan().id);
  }
}
