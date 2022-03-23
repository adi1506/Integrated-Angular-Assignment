import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAssignmentComponent } from './ag-grid-assignment/ag-grid-assignment.component';
import { BasicGridComponent } from './ag-grid-assignment/components/basic-grid/basic-grid.component';
import { ColorRowGridComponent } from './ag-grid-assignment/components/color-row-grid/color-row-grid.component';
import { FilteringGridComponent } from './ag-grid-assignment/components/filtering-grid/filtering-grid.component';
import { MoveColumnGridComponent } from './ag-grid-assignment/components/move-column-grid/move-column-grid.component';
import { MoveRowGridComponent } from './ag-grid-assignment/components/move-row-grid/move-row-grid.component';
import { RemoteDataGridComponent } from './ag-grid-assignment/components/remote-data-grid/remote-data-grid.component';
import { ResizeColumnGridComponent } from './ag-grid-assignment/components/resize-column-grid/resize-column-grid.component';
import { SelectingRowGridComponent } from './ag-grid-assignment/components/selecting-row-grid/selecting-row-grid.component';
import { SortingGridComponent } from './ag-grid-assignment/components/sorting-grid/sorting-grid.component';
import { AngularUploadObservablesComponent } from './file-upload-assignment/components/angular-upload-observables/angular-upload-observables.component';
import { AngularFileUploaderModuleComponent } from './file-upload-assignment/components/angular-file-uploader-module/angular-file-uploader-module.component';
import { FileUploadAssignmentComponent } from './file-upload-assignment/file-upload-assignment.component';

const routes: Routes = [
  {
    path: 'agGrid',
    component: AgGridAssignmentComponent,
    children: [
      {
        path: 'basicGrid',
        component: BasicGridComponent,
      },
      {
        path: 'sortingGrid',
        component: SortingGridComponent,
      },
      {
        path: 'filteringGrid',
        component: FilteringGridComponent,
      },
      {
        path: 'remoteDataGrid',
        component: RemoteDataGridComponent,
      },
      {
        path: 'selectingRowGrid',
        component: SelectingRowGridComponent,
      },
      {
        path: 'resizeColumnGrid',
        component: ResizeColumnGridComponent,
      },
      {
        path: 'moveColumnGrid',
        component: MoveColumnGridComponent,
      },
      {
        path: 'moveRowGrid',
        component: MoveRowGridComponent,
      },
      {
        path: 'colorRowGrid',
        component: ColorRowGridComponent,
      },
    ],
  },
  {
    path: 'fileUpload',
    component: FileUploadAssignmentComponent,
    children : [
      {
        path : 'angularFileUploader',
        component : AngularFileUploaderModuleComponent
      },
      {
        path : 'angularUploadObservables',
        component : AngularUploadObservablesComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [AgGridAssignmentComponent];
