import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ThemeToggleDirective } from '../../../directives/theme-toggle.directive';
import { ThemeService } from '../../../services/toggle.theme.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, CheckboxModule, ReactiveFormsModule, ThemeToggleDirective],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checked1 = signal<boolean>(true);
  
  themeService = inject(ThemeService);
  
  isDark = () => this.themeService.isDarkMode();
  
  inputField = new FormControl('Default value', [Validators.required, Validators.minLength(5)]);
}