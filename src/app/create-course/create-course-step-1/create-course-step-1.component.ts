import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../services/courses.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import { courseTitleValidator } from '../../validators/course-title.validator';

interface CourseCategory {
  code: string;
  description: string;
}

@Component({
  selector: 'create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrls: ['./create-course-step-1.component.scss']
})

export class CreateCourseStep1Component implements OnInit {

  form = this.fb.group({
    title: ['', { 
      validators: [ 
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(60) 
      ],
      asyncValidators: [courseTitleValidator(this.courses)],
      updateOn: 'blur'
    }],
    releaseAt: [ new Date(), Validators.required ],
    category: ['BEGINNER', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]] 
  });

  courseCategories$: Observable<CourseCategory[]>;

  constructor( 
    private fb: FormBuilder,
    private courses: CoursesService 
  ) {

  }
 
  ngOnInit() {
   this.FindCourseCategories();

   const draft = localStorage.getItem("STEP_1");

   if (draft) {
    this.form.setValue(JSON.parse(draft));
   }

   this.form.valueChanges.pipe( // per cdo vlere qe shtupim ne inputs form e shtojme ne localStorage

    filter(() => this.form.valid)

   ).subscribe(val => {

    localStorage.setItem("STEP_1", JSON.stringify(val));

   })

  }

  FindCourseCategories() {
    this.courseCategories$ = this.courses.findCourseCategories();
    console.log("this.courseCategories$",  this.courseCategories$);
  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
