import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'app';
  wp_content: any;
  wp_page_id: any; 

  ngOnInit() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/front-page').subscribe((data) => {
      this.wp_page_id = data;
      this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/pages/'+ data).subscribe((data) => {
        this.wp_content = data; 
      });
     });
  }
}
