import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/pages/').subscribe((data) => {
      console.log(data)
    });
  }

}
