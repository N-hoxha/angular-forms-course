import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  form = this.fb.group({
     email: ['', {
      validators: [ Validators.required, Validators.email ], 
      updateOn: 'blur' // it a same with [ngModelOptions]="{ updateOn: 'blur' }" in driven form
     }],
     password: ['', [ Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
  }); 

  constructor(private fb: NonNullableFormBuilder) {


  }

  ngOnInit() {

    console.log("every data info inside formGroup", this.form);
    console.log("this.form.controls['email']",this.form.controls['email'] )

  }

  get email() { // represend ->   <mat-error *ngIf="email.errors?.required"> The email is mandatory. </mat-error>
    return this.form.controls['email'];
  }

  get password() { // represend ->   <mat-error *ngIf="password.errors?.required"> The password is mandatore. </mat-error>
    return this.form.controls['password']; 
  }

  reset() {
    this.form.reset();
    console.log("this.form.value", this.form.value);
  }

} 

// 1. 
// form = new FormGroup({
//   email: new FormControl('', { validators: [ Validators.required, Validators.email ] } ),
//   password: new FormControl('', [Validators.required, Validators.minLength(8)])
// }); 

// 2.
// email = new FormControl('', { 
//   validators: [ Validators.required, Validators.email ], 
//   updateOn: 'blur' // it a same with [ngModelOptions]="{ updateOn: 'blur' }" in driven form
// });
// password = new FormControl('', { 
//   validators: [ 
//     Validators.required, 
//     Validators.minLength(8),
//     createPasswordStrengthValidator()
//   ]
// });

// form = new FormGroup({
//   email: this.email,
//   password: this.password
// });

// 3. 
// both are the same only when rest value "  this.form.reset(); ", in this part email == null -> not string
//  form = this.fb.group({
//   email: ['', { // string or null 
//     validators: [ Validators.required, Validators.email ], 
//     updateOn: 'blur' // it a same with [ngModelOptions]="{ updateOn: 'blur' }" in driven form
//    }],
//    password: ['', [ Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
// }); 

// both are the same only when rest value "  this.form.reset(); ", in this part email == '' -> string 
//  form = this.fb.group({
//   email: this.fb.nonNullable.control('', {
//     validators: [ Validators.required, Validators.email ], 
//     updateOn: 'blur' // it a same with [ngModelOptions]="{ updateOn: 'blur' }" in driven form
//    }),
//    password: ['', [ Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
// }); 
 