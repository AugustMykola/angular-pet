import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-pass-information',
  imports: [IconFieldModule, InputIconModule],
  templateUrl: './pass-information.html',
  styleUrl: './pass-information.scss',
})
export class PassInformation {
  labels: string[] = [
    'Current Password:', 
    'New Password:', 
    'Confirm New Password:'
  ];
}
