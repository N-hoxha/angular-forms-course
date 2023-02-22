import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

@Directive({
    selector: "[passwordStrength]",
    providers: [{ // the function *ngIf="password.errors?.passwordStrength" does't work if not add the providers
        provide: NG_VALIDATORS,
        useExisting: PasswordStrengthDirective, 
        multi: true
    }]
}) 

// Directive, bind the function " createPasswordStrengthValidator() " that work inside angular framework
export class PasswordStrengthDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
       // console.log(" directive controls ", control); // we take the FormControl to like Validator function
        return createPasswordStrengthValidator()(control);
    }
} 