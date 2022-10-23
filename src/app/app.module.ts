import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import { ShiftAssignmentComponent } from './shift-assignment/shift-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftAssignmentComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, NgSelectModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
