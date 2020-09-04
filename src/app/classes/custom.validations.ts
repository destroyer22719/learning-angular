import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidation {
    static unique(control:AbstractControl):ValidationErrors | null {
        return control.value === 'kold' ? {unique:true}:null;
    }
}
