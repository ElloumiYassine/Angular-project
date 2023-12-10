import { Component } from '@angular/core';
import { actionModel } from 'src/app/models/actionModel';
import { ActionServiceService } from 'src/app/service/action-service.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent {
  actions: actionModel[] = [];
  selectedAction: actionModel | undefined;
  isSelected:boolean|undefined;
  constructor(private actionService: ActionServiceService) { }
  ngOnInit(): void {
    this.actions=this.actionService.getActions()
    
  }
  deleteAction(id: number  | undefined): void {
    // Use the ActionService to delete the action by ID
    if (id !== undefined) {
      this.actionService.deleteActionById(id);
    }  }

    editAction(action: actionModel): void {
      this.selectedAction = action;
      
      
    }
  
    onSaveEditedAction(editedAction: actionModel): void {
      if (this.selectedAction) {
        // Update the action in the list
        const index = this.actions.findIndex(action => action.id === this.selectedAction?.id);
        if (index !== -1) {
          this.actions[index] = editedAction;
        }
        this.isSelected=this.selectedAction.accepted
        console.log("selected action : "+typeof(this.isSelected))
        // Reset selectedAction
        this.selectedAction = undefined;
        

      }
    }
  
    closeEditForm(): void {
      this.selectedAction = undefined;
    }

}
