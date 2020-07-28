import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-JustTest',
  templateUrl: './JustTest.component.html',
  styleUrls: ['./JustTest.component.css']
})
export class JustTestComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/justtest').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
