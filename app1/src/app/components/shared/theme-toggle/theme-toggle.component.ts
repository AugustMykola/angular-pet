import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../../services/toggle.theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
}
