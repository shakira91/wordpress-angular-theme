import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  wp_categoryDataImage: any = [];

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/media?per_page=100').subscribe((data) => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.wp_categoryDataImage.push(data[key].source_url) //data[key].categories to get category name
        }
      }
    });
  }
}
