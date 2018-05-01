import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  wp_content: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/front-page').subscribe((data) => {
      this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/pages/'+data).subscribe((data) => {
        this.wp_content = data;
      });
     });
  }

}
