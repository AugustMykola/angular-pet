import { Component,input ,output} from "@angular/core";
import { PricingPlan } from "../../../../../models";

@Component({
    selector: 'app-pricing-card-right-half',
    templateUrl: './pricing-card-right-half.html',
    styleUrls: ['./pricing-card-right-half.scss']
})
export class PricingCardRightHalfComponent {
  plan = input.required<PricingPlan>();
}