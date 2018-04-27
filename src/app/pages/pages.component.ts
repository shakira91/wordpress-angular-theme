import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  wp_contents: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.route.snapshot.params.id)
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/pages?slug='+this.route.snapshot.params.id).subscribe((data) => {
      this.wp_contents = data;
      console.log(this.wp_contents)
    });
  }

}
