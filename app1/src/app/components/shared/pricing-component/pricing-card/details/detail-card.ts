import { Component, input } from "@angular/core";
import { PricingPlan } from "../../../../../models";
import { CurrencyPipe } from "@angular/common";
@Component({
    selector: 'app-detail-card',
    templateUrl: './detail-card.html',
    styleUrls: ['./detail-card.scss'],
    imports:[CurrencyPipe]
})
export class DetailCardComponent {
  plan = input.required<PricingPlan>();
}          