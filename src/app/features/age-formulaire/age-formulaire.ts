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
    dateInput: ["1970-01-01", Validators.required]
  },{
    validators: [ageValidator()]
  })

  valider() {
    if (this.ageForm.valid){
      console.log("Formulaire envoyé !");
    }
  }

}