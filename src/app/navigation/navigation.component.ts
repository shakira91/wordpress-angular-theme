import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() frontPageContentLodaded; //if the content on the front page has loaded, load navigation

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/menus').subscribe((data) => {
     console.log(data)
    });
  }

}
