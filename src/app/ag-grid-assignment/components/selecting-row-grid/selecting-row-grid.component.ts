import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selecting-row-grid',
  templateUrl: './selecting-row-grid.component.html',
  styleUrls: ['./selecting-row-grid.component.css']
})
export class SelectingRowGridComponent implements OnInit {

  @ViewChild('agGrid', {static:false}) agGrid: AgGridAngular;

  column=[
    {
    "headerName" : "Emp ID",
    "field" : "empId",
    sortable : true,
    filter : true
    },
    {
      "headerName" : "Emp Name",
      "field" : "empName",
      sortable : true,
      filter : true,
      checkboxSelection : true
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
  
  getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      const selectedDataStringPresentation = selectedData.map(node => node.empName + ' ' + node.empAge).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
