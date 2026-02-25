import { Component } from '@angular/core';
import { ContactComponent } from '../../shared/contact-component/contact-component';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
})
export class PageContactComponent {}
