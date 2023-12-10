import { Component } from '@angular/core';
import { membreModel } from 'src/app/models/membreModel';
import { MembreServiceService } from 'src/app/service/membre-service.service';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent {
  members: membreModel[] = [];
  constructor(private membreService: MembreServiceService) { }
  ngOnInit(): void {
    this.members=this.membreService.getMembers()
    
  }
  deleteMembre(id: number  | undefined): void {
    if (id !== undefined) {
      this.membreService.deleteMembreById(id);
    }  }


}
