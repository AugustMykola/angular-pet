import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CustomValidators {

    passwordMatch(passwordField: string, confirmField: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.get(passwordField);
            const confirmPassword = control.get(confirmField);

            if (password && confirmPassword && password.value !== confirmPassword.value) {
                return { passwordMismatch: true };
            }
            return null;
        };
    }

}
 