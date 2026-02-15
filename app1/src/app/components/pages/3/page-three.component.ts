import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
})
export class PageThreeComponent {}
