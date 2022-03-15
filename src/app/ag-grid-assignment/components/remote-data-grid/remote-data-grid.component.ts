import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remote-data-grid',
  templateUrl: './remote-data-grid.component.html',
  styleUrls: ['./remote-data-grid.component.css']
})
export class RemoteDataGridComponent implements OnInit {

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
      filter : true
    },
    {
      "headerName" : "Emp Age",
      "field" : "empAge",
      sortable : true,
      filter : true
    },
  ];

//   column = [
//     { field: 'make', sortable: true, filter: true },
//     { field: 'model', sortable: true, filter: true },
//     { field: 'price', sortable: true, filter: true }
// ];

  row: Observable<any[]>;


  constructor(private http : HttpClient) {
    this.row = this.http.get<any[]>('https://run.mocky.io/v3/8a0dcf12-36a1-4059-9144-ff0306e8f06d');
   }

//   constructor(private http: HttpClient) {
//     this.row = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
// }

  ngOnInit(): void {
  }

}
