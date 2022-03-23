import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridAssignmentComponent } from './ag-grid-assignment/ag-grid-assignment.component';
import { BasicGridComponent } from './ag-grid-assignment/components/basic-grid/basic-grid.component';
import { GridReadyUsageComponent } from './ag-grid-assignment/components/grid-ready-usage/grid-ready-usage.component';
import { SortingGridComponent } from './ag-grid-assignment/components/sorting-grid/sorting-grid.component';
import { FilteringGridComponent } from './ag-grid-assignment/components/filtering-grid/filtering-grid.component';
import { RemoteDataGridComponent } from './ag-grid-assignment/components/remote-data-grid/remote-data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectingRowGridComponent } from './ag-grid-assignment/components/selecting-row-grid/selecting-row-grid.component';
import { ResizeColumnGridComponent } from './ag-grid-assignment/components/resize-column-grid/resize-column-grid.component';
import { MoveColumnGridComponent } from './ag-grid-assignment/components/move-column-grid/move-column-grid.component';
import { MoveRowGridComponent } from './ag-grid-assignment/components/move-row-grid/move-row-grid.component';
import { ColorRowGridComponent } from './ag-grid-assignment/components/color-row-grid/color-row-grid.component';

//imports for file upload assignment
import { FileUploadAssignmentComponent } from './file-upload-assignment/file-upload-assignment.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AngularFileUploaderModuleComponent } from './file-upload-assignment/components/angular-file-uploader-module/angular-file-uploader-module.component';
import { AngularUploadObservablesComponent } from './file-upload-assignment/components/angular-upload-observables/angular-upload-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridAssignmentComponent,
    BasicGridComponent,
    GridReadyUsageComponent,
    SortingGridComponent,
    FilteringGridComponent,
    RemoteDataGridComponent,
    SelectingRowGridComponent,
    ResizeColumnGridComponent,
    MoveColumnGridComponent,
    MoveRowGridComponent,
    ColorRowGridComponent,
    FileUploadAssignmentComponent,
    AngularFileUploaderModuleComponent,
    AngularUploadObservablesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgGridModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
