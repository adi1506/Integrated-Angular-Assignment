import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-grid',
  templateUrl: './filtering-grid.component.html',
  styleUrls: ['./filtering-grid.component.css']
})
export class FilteringGridComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
