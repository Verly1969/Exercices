import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dateInput = new Date(control.value);
        const dateActual  = new Date();

        console.log(dateActual.getFullYear());
        console.log(dateInput.getFullYear());

        if ((dateActual.getFullYear() - dateInput.getFullYear()) < 18){
            return { mineur : "Vous êtes trop jeune pour entrer !"};
        }

        return null;
    }
}