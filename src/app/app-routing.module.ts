import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { ActionComponent } from './Component/action/action.component';
import { MembreComponent } from './Component/membre/membre.component';
import { ActionListComponent } from './Component/action-list/action-list.component';

const routes: Routes = [
  {path:"",component: LandingPageComponent},
  {path:"action",component: ActionComponent},
  {path:"membre",component: MembreComponent},
  {path:"actionList",component: ActionListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
