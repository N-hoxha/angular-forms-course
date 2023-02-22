import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// The function receives a control and synchronously returns a map of validation errors if present, otherwise null.
export function createPasswordStrengthValidator(): ValidatorFn {

    // we take string by FormControl/value and we check if there are errors: " condition down for uppercase, lowercase and number " or not, 
    // if has errors return in code { password.errors?.passwordStrength } -> " { passwordStrength: true } ", else return null

    // the AbstractControl function take every thing by FormControl, FormGroup, and FormArray by component
    // ValidationErrors function, defines the map of errors returned from failed validation checks or not.
    return ( control: AbstractControl ): ValidationErrors | null => {

        console.log("control in validators", control); // FormControl for each input inside ngForm

        // take all string input of password by ngModel and save here just const value
        const value = control.value; // ketu do lexoj ne dokumentacione sa funkjone kete nga libraria AbstractControl

        if (!value) {
            return null;
        }

        // the functon read the string if has uppercase or not, if not has, return error, that the string shloud have a uppercase or more uppercase
        const hasUpperCase = /[A-Z]+/.test(value);

        // the functon read the string if has lowercase or not, if not has, return error, that the string shloud have a lowercase or more lowercase
        const hasLowerCase = /[a-z]+/.test(value);

        // the functon read the string if has number or not, if not has, return error, that the string shloud have a number or more number
        const hasNumber = /[0-9]+/.test(value);

        // bind all functions in one function
        const passwordValid = hasUpperCase && hasLowerCase && hasNumber;

        // if not validator return passwordStrength: true that meaning we have a errors else return null, we have not a errors.
        return !passwordValid ? { passwordStrength: true } : null;

        // this think " { passwordStrength: true } " add inside errors function that code reading by #password="ngModel" 
        
    }
} 