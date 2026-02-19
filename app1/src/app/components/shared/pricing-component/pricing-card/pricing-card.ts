import { Component ,input} from "@angular/core";
import { PricingPlan } from "../../../../models";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.html',
  styleUrls: ['./pricing-card.scss'],
  imports: [ButtonModule, CommonModule]
})
export class PricingCardComponent {
  plan = input.required<PricingPlan>();
}
