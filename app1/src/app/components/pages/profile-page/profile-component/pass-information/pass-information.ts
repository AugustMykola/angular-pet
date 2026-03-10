import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-pass-information',
  imports: [ PasswordModule, FormsModule, FloatLabelModule ],
  templateUrl: './pass-information.html',
  styleUrls: ['./pass-information.scss'],
})
export class PassInformation {
  passwords: Record<string, string> = {
    current: '',
    new: '',
    confirm: ''
  };

  fields = [
    { id: 'current', label: 'Current Password:' },
    { id: 'new', label: 'New Password:' },
    { id: 'confirm', label: 'Confirm New Password:' }
  ];
}
