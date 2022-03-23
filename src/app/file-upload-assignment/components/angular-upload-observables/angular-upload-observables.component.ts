import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular-upload-observables',
  templateUrl: './angular-upload-observables.component.html',
  styleUrls: ['./angular-upload-observables.component.css']
})
export class AngularUploadObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimage: Observable<any>;

  onChange($event: Event) {
    console.log($event);
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    this.myimage = observable;

    // this.myimage = new Observable((subscriber: Subscriber<any>) => {
    //   this.readFile(file, subscriber);
    // });
    observable.subscribe((d) => {
      console.log(d);
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
