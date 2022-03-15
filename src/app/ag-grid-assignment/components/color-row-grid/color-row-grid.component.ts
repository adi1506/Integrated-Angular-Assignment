import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color-row-grid',
  templateUrl: './color-row-grid.component.html',
  styleUrls: ['./color-row-grid.component.css']
})
export class ColorRowGridComponent implements OnInit {


  column=[
    {
    "headerName" : "Emp ID",
    "field" : "empId",
    sortable : true,
    filter : true,
    resizable : true,
    rowDrag : true
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
      filter : true,
      cellStyle : (params) => (params.value > 23 ? {'background-color' : 'green'}:{'background-color' : 'red'} )
      // params.value>23?{background:"green"}:{background:"red"}
    },
  ];


  row: Observable<any[]>;


  constructor(private http : HttpClient) {
    this.row = this.http.get<any[]>('https://run.mocky.io/v3/8a0dcf12-36a1-4059-9144-ff0306e8f06d');
   }

  ngOnInit(): void {
  }



}
