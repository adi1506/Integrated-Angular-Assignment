import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.css']
})
export class BasicGridComponent implements OnInit {

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
      "empId" : "1111",
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
