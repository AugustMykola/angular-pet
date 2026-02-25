import { Component, input } from "@angular/core";
import { PricingPlan } from "../../../../../models";

@Component({
    selector: 'app-detail-card',
    templateUrl: './detail-card.html',
    styleUrls: ['./detail-card.scss']
})
export class DetailCardComponent {
  plan = input.required<PricingPlan>();
}          