import { Component,Input,OnChanges, SimpleChanges, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actionModel } from 'src/app/models/actionModel';
import { ActionServiceService } from 'src/app/service/action-service.service';

@Component({
  selector: 'app-edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.css']
})
export class EditActionComponent implements OnInit {
  @Input() action: actionModel | undefined;
  @Output() onSaveAction = new EventEmitter<actionModel>(); // Corrected property declaration
  @Output() closeForm = new EventEmitter<void>();
  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private actionService: ActionServiceService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      inputActionName: [this.action?.actionName, Validators.required],
      inputResponsible: [this.action?.objectif, Validators.required],
      inputObjectif: [this.action?.responsable, Validators.required],
      inputNbPres: [this.action?.nbPers, [Validators.required, Validators.min(1)]],
      inputDate: [this.action?.date, Validators.required],
      inputAccepted: [this.action?.accepted, Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['action'] && changes['action'].currentValue) {
      this.initForm();
    }
  }
  initForm(): void {
    this.editForm = this.fb.group({
      ActionName: [this.action?.actionName, Validators.required],
      Objectif: [this.action?.objectif, Validators.required],
      Responsable: [this.action?.responsable, Validators.required],
      NbPers: [this.action?.nbPers, [Validators.required, Validators.min(1)]],
      Date: [this.action?.date, Validators.required]
    });
  }
  onSave(): void {
    console.log("editForm value : "+this.editForm.value.inputAccepted)
    const acceptedValue: boolean = this.editForm.get('inputAccepted')?.value;
    console.log('Checkbox Value:', acceptedValue);

    if (this.editForm.valid && this.action) {
      this.action.actionName=this.editForm.value.inputActionName
      this.action.objectif=this.editForm.value.inputObjectif
      this.action.responsable=this.editForm.value.inputResponsible
      this.action.nbPers=this.editForm.value.inputNbPres
      this.action.date=this.editForm.value.inputDate
      this.action.accepted=this.editForm.get('inputAccepted')?.value
      console.log("ACTIONNNNNNNNNNnn"+this.action);
      
      const editedAction: actionModel = {
        ...this.action
        
      };
      console.log('Edited Action:', editedAction);
      this.onSaveAction.emit(editedAction); // Emit event to save the edited action
      this.closeForm.emit(); // Emit event to close the form
    }}
  
}
