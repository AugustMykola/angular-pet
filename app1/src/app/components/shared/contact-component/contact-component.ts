import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ButtonModule, RouterModule, CardModule],
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.scss'],
})
export class ContactComponent {
 
  
}
