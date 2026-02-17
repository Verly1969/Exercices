import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dateNaissance = control.value;
        const dateActual  = new Date();

        const dateNaissanceValue = new Date(dateNaissance);

        const age = dateActual.getFullYear() - dateNaissanceValue.getFullYear();

        // console.log(`Date actuelle: ${dateActual}`);
        // console.log(`Date entrée: ${dateNaissanceValue}`);

        console.log(`age: ${age}`);

        if (age < 18){
            return { "mineur": "Vous êtes trop jeune pour entrer !"};
        } else {
            return null;
        }
    }
}