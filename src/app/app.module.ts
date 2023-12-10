import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './Component/action/action.component';
import { MembreComponent } from './Component/membre/membre.component';
import { ActionListComponent } from './Component/action-list/action-list.component';
import { HeaderComponent } from './Component/header/header.component';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditActionComponent } from './Component/edit-action/edit-action.component';
import { MembreListComponent } from './Component/membre-list/membre-list.component'; // Importez ReactiveFormsModule


@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    MembreComponent,
    ActionListComponent,
    HeaderComponent,
    LandingPageComponent,
    EditActionComponent,
    MembreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
