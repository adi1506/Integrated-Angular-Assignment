import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-move-column-grid',
  templateUrl: './move-column-grid.component.html',
  styleUrls: ['./move-column-grid.component.css']
})
export class MoveColumnGridComponent implements OnInit {

  private gridColumnApi!: ColumnApi;

  column=[
    {
    "headerName" : "Emp ID",
    "field" : "empId",
    sortable : true,
    filter : true,
    resizable : true
    },
    {
      "headerName" : "Emp Name",
      "field" : "empName",
      sortable : true,
      filter : true,
      resizable : true
    },
    {
      "headerName" : "Emp Age",
      "field" : "empAge",
      sortable : true,
      filter : true
    },
  ];


  row: Observable<any[]>;


  constructor(private http : HttpClient) {
    this.row = this.http.get<any[]>('https://run.mocky.io/v3/8a0dcf12-36a1-4059-9144-ff0306e8f06d');
   }


  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }

  onEmpAgeFirst(){
    this.gridColumnApi.moveColumn('empAge',0);
  }

  onEmpAgeLast(){
    this.gridColumnApi.moveColumn('empAge',2);
  }

}
