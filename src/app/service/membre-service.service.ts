import { Injectable } from '@angular/core';
import { membreModel } from '../models/membreModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreServiceService {
  private nextId = 0;
  private accepted=false

   members: membreModel[] = [];
  private MembersSubject = new BehaviorSubject<membreModel[]>(this.members);

  constructor() { }

  getMembers(): membreModel[] {
    return this.members;
  }

  createMembre(newMembre: membreModel): void {

    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(newMembre);
    newMembre.id=this.nextId++;
    this.members.push(newMembre);
    console.log("membre was created"+newMembre);
    
    
    //this.actionsSubject.next([...this.actions]);

  }
  deleteMembreById(id: number): void {
    const index = this.members.findIndex(action => action.id === id);
    if (index !== -1) {
      this.members.splice(index, 1);
      this.MembersSubject.next([...this.members]);
    }}

}
