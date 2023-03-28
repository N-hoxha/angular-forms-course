import {FormGroup, ValidatorFn, Validators} from '@angular/forms';

export function createPromoRangeValidator(): ValidatorFn {

    return (form: FormGroup): Validators | null => {

        const start: Date = form.get("promoStartAt").value;
        console.log("start", start);

        const end: Date = form.get("promoEndAt").value;

        if (start && end) {

            const isRangeValid = ( end?.getDate() - start?.getDate() > 0 );

            return isRangeValid ? null : { promoPeriod: true };

        }

        return null;

    }

}