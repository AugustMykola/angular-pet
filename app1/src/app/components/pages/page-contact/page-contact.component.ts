import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../shared/contact-component/contact-component';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactComponent],
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
})
export class PageContactComponent {}
