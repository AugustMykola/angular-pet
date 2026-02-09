import { Directive, HostListener, inject, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/toggle.theme.service';

@Directive({
  selector: '[appThemeToggle]',
  standalone: true
})
export class ThemeToggleDirective {
  private themeService: ThemeService = inject(ThemeService);
  private renderer = inject(Renderer2);

  @HostListener('click')
  toggle() {
    this.themeService.toggleTheme();
    
    const htmlElement = document.documentElement;

    if (this.themeService.isDarkMode()) {
      this.renderer.addClass(htmlElement, 'dark');
    } else {
      this.renderer.removeClass(htmlElement, 'dark');
    }
  }
}