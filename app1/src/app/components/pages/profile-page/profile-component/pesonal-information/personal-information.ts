import { Component, input, OnInit } from '@angular/core';
import { User } from '../../../../../models';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Validators } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

const PROFILE_STORAGE = 'user_profile';

@Component({
  selector: 'app-personal-information',
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    InputMaskModule,
  ],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.scss',
})
export class PersonalInformation implements OnInit {
  user = input.required<User>();

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/^[^0-9]*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('+380', [
      Validators.required,
      Validators.pattern(/^\+380\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/),
    ]),
  });

  ngOnInit() {
    this.form.patchValue({
      firstName: this.user().firstName,
      email: this.user().email,
      phoneNumber: this.user().phoneNumber,
    });
  }

  updateProfile() {
    if (this.form.valid) {
      console.log('Updated profile with values:', this.form.value);
    }
  }
}
