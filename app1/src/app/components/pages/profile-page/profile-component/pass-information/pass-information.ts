import { Component, signal, computed } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

type FormKeys = 'current' | 'new' | 'confirm';

@Component({
  selector: 'app-pass-information',
  imports: [PasswordModule, FloatLabelModule, FormsModule],
  templateUrl: './pass-information.html',
  styleUrls: ['./pass-information.scss'],
})
export class PassInformation {
  fields: { id: FormKeys; label: string }[] = [
    { id: 'current', label: 'Current Password:' },
    { id: 'new', label: 'New Password:' },
    { id: 'confirm', label: 'Confirm New Password:' },
  ];
  formState = {
    current: signal(''),
    new: signal(''),
    confirm: signal(''),
  };

  isCorrect = computed(() => this.formState.new() === this.formState.confirm());
  isMinLengthValid = computed(() => this.formState.new().length >= 8);
  isFormValid = computed(
    () => 
      this.formState.current() !== '' &&
      this.isCorrect() &&
      this.formState.new() !== this.formState.current()
  );

  changePassword() {
    console.log('New password===>', this.formState.new());
    if (this.isCorrect()) {
      this.formState.current.set('');
      this.formState.new.set('');
      this.formState.confirm.set('');
    }
  }
} ///siglans!!!!,validators ,обработка ошибок,добавить применг поля
