import { Component } from '@angular/core';
import {  FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { membreModel } from 'src/app/models/membreModel';
import { MembreServiceService } from 'src/app/service/membre-service.service';
@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent {
  membreForm !: FormGroup;

  constructor(private fb: FormBuilder, private membreService: MembreServiceService) {
    this.createForm();
  }

  createForm() {
    this.membreForm = this.fb.group({
      inputName: ['', Validators.required],
      inputAge: ['', Validators.required],
         });
  }

  onSubmit():void {
    if (this.membreForm.valid) {
      const newAction = this.membreForm.value;
      console.log('Action créée avec succès');
      console.log(newAction);
      
      this.membreService.createMembre(new membreModel(newAction.inputName,newAction.inputAge))


      // Réinitialiser le formulaire si nécessaire
     this.membreForm.reset();
    }
  }


}
