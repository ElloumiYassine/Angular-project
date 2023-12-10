import { Component } from '@angular/core';
import {  FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { actionModel } from 'src/app/models/actionModel';
import { ActionServiceService } from 'src/app/service/action-service.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  actionForm !: FormGroup;

  constructor(private fb: FormBuilder, private actionService: ActionServiceService) {
    this.createForm();
  }

  createForm() {
    this.actionForm = this.fb.group({
      inputActionName: ['', Validators.required],
      inputResponsible: ['', Validators.required],
      inputObjectif: ['', Validators.required],
      inputDate: ['', [Validators.required, Validators.min(1)]],
      inputNbPres: ['', Validators.required]
    });
  }

  onSubmit():void {
    if (this.actionForm.valid) {
      const newAction = this.actionForm.value;
      console.log('Action créée avec succès');
      console.log(newAction);
      
      this.actionService.createAction(new actionModel(newAction.inputActionName,newAction.inputObjectif,newAction.inputResponsible,newAction.inputNbPres,newAction.inputDate))


      // Réinitialiser le formulaire si nécessaire
     this.actionForm.reset();
    }
  }
}
