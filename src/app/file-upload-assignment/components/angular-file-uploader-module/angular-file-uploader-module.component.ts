import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-file-uploader-module',
  templateUrl: './angular-file-uploader-module.component.html',
  styleUrls: ['./angular-file-uploader-module.component.css']
})
export class AngularFileUploaderModuleComponent implements OnInit {

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.pdf",
    maxSize: "20",
    uploadAPI: {
      url:"https://slack.com/api/file.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
