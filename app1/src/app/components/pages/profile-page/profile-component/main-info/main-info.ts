import { Component, input } from '@angular/core';
import { User } from '../../../../../models';

@Component({
  selector: 'app-main-info',
  imports: [],
  templateUrl: './main-info.html',
  styleUrl: './main-info.scss',
})
export class MainInfo {
  readonly user = input.required<User>();

}
