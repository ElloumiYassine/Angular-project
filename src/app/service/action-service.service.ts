import { Injectable } from '@angular/core';
import { actionModel } from '../models/actionModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionServiceService {
  private nextId = 0;
  private accepted=false

   actions: actionModel[] = [];
  private actionsSubject = new BehaviorSubject<actionModel[]>(this.actions);

  constructor() { }

  getActions(): actionModel[] {
    return this.actions;
  }

  createAction(newAction: actionModel): void {

    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(newAction);
    newAction.id=this.nextId++;
    this.actions.push(newAction);
    //this.actionsSubject.next([...this.actions]);
    const obj:String=this.actions[0].actionName
    console.log("Hello from service.createAction"+obj);
    
  }
  deleteActionById(id: number): void {
    const index = this.actions.findIndex(action => action.id === id);
    if (index !== -1) {
      this.actions.splice(index, 1);
      this.actionsSubject.next([...this.actions]);
    }}
    editAction(editedAction: actionModel): void {
      const index = this.actions.findIndex(action => action.id === editedAction.id);
      if (index !== -1) {
        this.actions[index] = editedAction;
        this.actionsSubject.next([...this.actions]);
      }
    }

}
