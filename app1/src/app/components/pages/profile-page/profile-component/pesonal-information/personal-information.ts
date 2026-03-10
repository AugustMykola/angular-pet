import { Component, input } from '@angular/core';
import { User } from '../../../../../models';

@Component({
  selector: 'app-personal-information',
  imports: [],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.scss',
})
export class PersonalInformation {
  user = input.required<User>();
}
