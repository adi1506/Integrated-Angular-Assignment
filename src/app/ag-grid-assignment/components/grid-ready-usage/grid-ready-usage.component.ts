import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-ready-usage',
  templateUrl: './grid-ready-usage.component.html',
  styleUrls: ['./grid-ready-usage.component.css']
})
export class GridReadyUsageComponent implements OnInit {

  gridApi: any;
  columnApi: any;

  column=[
    {
    "headerName" : "Emp ID",
    "field" : "empId"
    },
    {
      "headerName" : "Emp Name",
      "field" : "empName"
    },
    {
      "headerName" : "Emp Age",
      "field" : "empAge"
    },
  ];

  row=[
    {
      "empId" : "9999",
      "empName" : "Aditya Chatterjee",
      "empAge" : 21
    },
    {
      "empId" : "2222",
      "empName" : "Harsh Rai",
      "empAge" : 22
    },
    {
      "empId" : "3333",
      "empName" : "Abhisar Pandey",
      "empAge" : 23
    },
    {
      "empId" : "4444",
      "empName" : "Vaibhav Pal",
      "empAge" : 24
    },
    {
      "empId" : "5555",
      "empName" : "Rhythm Sharma",
      "empAge" : 25
    },
  ]

  OnGridReady(params){
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
