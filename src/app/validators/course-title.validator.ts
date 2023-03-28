import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map, tap } from "rxjs/operators";
import { CoursesService } from "../services/courses.service";

// take all service by CreateCourseStep1Component " asyncValidators: [courseTitleValidator(this.courses)] "
export function courseTitleValidator(courses: CoursesService): AsyncValidatorFn { // call all service 

    // eshte nje validator qe pret tedhena ne te ardhmen. duke shfrytezuar kete ne mund te bejme nje thirje ne backend.

    return ( control: AbstractControl ) => { // take the value input title 
        
        return courses.findAllCourses() // call this service findAllCourses
         .pipe( tap( test => console.log("courseTitleValidator",test) ),
            map( courses => { // take all array object 
                const course = courses.find( // controll each object 
                 // the " course.description " is the value inside object " description "
                 // so control if value string inside object == with string inside input title
                    course => course.description.toLowerCase() == control.value.toLowerCase()
                );
                console.log("courses.findAllCourses()",course)
                // if === display error else null, undifined 
                return course ? { titleExists: true } : null;
            })
         );
    }

}