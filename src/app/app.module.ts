import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridAssignmentComponent } from './ag-grid-assignment/ag-grid-assignment.component';
import { BasicGridComponent } from './ag-grid-assignment/basic-grid/basic-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    AgGridAssignmentComponent,
    BasicGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
