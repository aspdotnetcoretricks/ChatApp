import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-velue',
  templateUrl: './velue.component.html',
  styleUrls: ['./velue.component.css']
})
export class VelueComponent implements OnInit {

   values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Response => {
                 this.values = Response;
                 },
      error =>  {
                  console.error(error);
                 }

     );
  }
}
