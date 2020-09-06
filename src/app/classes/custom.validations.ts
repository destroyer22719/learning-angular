import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidation {
    static unique(control:AbstractControl):ValidationErrors | null {
        return control.value === 'kold' ? {unique:true}:null;
    }
    static asyncUnique(control:AbstractControl): Promise<ValidationErrors | null>| null {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                control.value === 'kold' ? resolve({asyncUnique:true}): resolve(null);
            }, 1000)
        })
        return myPromise
     }
}
