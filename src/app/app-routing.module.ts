import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAssignmentComponent } from './ag-grid-assignment/ag-grid-assignment.component';
import { BasicGridComponent } from './ag-grid-assignment/basic-grid/basic-grid.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'agGrid',
    component: AgGridAssignmentComponent,
    children: [
      {
        path: 'basicGrid',
        component: BasicGridComponent,
        outlet: 'agGrid'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [AgGridAssignmentComponent];
