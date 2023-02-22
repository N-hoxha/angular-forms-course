import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'onlyOneError'
})
export class OnlyOneErrorPipe implements PipeTransform {
  
    transform(allErrors: any, errorsPriority: any[]): any {

        // console.log("allErrors in pipe", allErrors); // {required: true}
        // console.log("errorsPriority in pipe", errorsPriority); // ['required', 'minlength', 'email']
        
        if (!allErrors) { // if not errors the function break in this return null 
            return null;
        }

        // else if has error the function read the code and find whice is the name errors " required, minlength, email or passwordStrength "
        const onlyOneError: any = {};

        for (let error of errorsPriority) { // take one data inside this array " ['required', 'minlength', 'email'] "
            if (allErrors[error]) { // if have required
                onlyOneError[error] = allErrors[error]; // required = required 
                break; // breack, if not find the errors, the function rolled inside the for (let error of errorsPriority) { .... here }
            }
        }

        // console.log("onlyOneError", onlyOneError); // {required: true}
        // return {required: true} display only the required error message in login.component.html " *ngIf="email.errors | onlyOneError:['required', 'minlength', 'email'] as error" "
        return onlyOneError; 

        

    }

} 