import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
    selector: '[appComparePassWordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ComparePasswordValidators,
        multi: true
    }]
})


export class ComparePasswordValidators implements Validator {
    @Input() appComparePassWordValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // console.log(control.value);
        // console.log(control.parent.get(this.appComparePassWordValidator).value);
        if (control.value !== control.parent.get(this.appComparePassWordValidator).value) {
            return { 'mustMatch' : true };
        }
        return null;
    }
}