import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [
    {
      // helps us catch the mistake in " mat-step "
      provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }
  ]
})
export class CreateCourseComponent implements OnInit {


  ngOnInit() {

  }

}
