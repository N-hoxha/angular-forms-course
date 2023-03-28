import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { createPromoRangeValidator } from '../../validators/date-range.validator';


@Component({
  selector: 'create-course-step-2',
  templateUrl: 'create-course-step-2.component.html',
  styleUrls: ['create-course-step-2.component.scss']
})
export class CreateCourseStep2Component implements OnInit {

  form = this.fb.group({
    couseType: ['premium', Validators.required],
    price: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(9999),
      Validators.pattern("[0-9]+")
    ]],
    promoStartAt: [null],
    promoEndAt: [null]
  }, {
    validators: [createPromoRangeValidator()],
    updateOn: 'blur'
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  
    this.ValueChanges();
   

  }

  ValueChanges() {
       // console.log("this.form", this.form);
       this.form.valueChanges.subscribe(val => {
       
        // console.log("valueChanges", val);
        const priceControl = this.form.controls["price"];
        //  console.log("priceControl", priceControl);

        if (val.couseType == 'free' && priceControl.enable) {
          priceControl.disable({emitEvent: false}); // return disable input price
        } else if (val.couseType == 'premium' && priceControl.disabled) {
          priceControl.enable({emitEvent: false}) // return enable input price
        }

      });
  }

}
 