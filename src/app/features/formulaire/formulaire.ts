import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      skills: this.fb.array([])
    });
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  createSkillGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      level: ['Débutant', Validators.required]
    });
  }

  addSkill() {
    this.skills.push(this.createSkillGroup());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
  if (this.form.valid) {
    console.log(this.form.value);
    // Handle form submission here
  }
}
}
