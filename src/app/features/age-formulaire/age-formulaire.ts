import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ageValidator } from '../../shared/validator/ageValidator';

@Component({
  selector: 'app-age-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './age-formulaire.html',
  styleUrl: './age-formulaire.css',
})
export class AgeFormulaire {
  
  private readonly _fb: FormBuilder = inject(FormBuilder);
  
  ageForm: FormGroup = this._fb.group({
    dateNaissance: [null, [Validators.required, ageValidator()]]
  })

  valider() {
    console.log(this.ageForm.controls["dateNaissance"].value);
    if (this.ageForm.controls["dateNaissance"].valid){
      console.log("Formulaire envoyé !");
    }
  }

}