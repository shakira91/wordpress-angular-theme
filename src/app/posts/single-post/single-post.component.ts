import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  wp_content: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/posts/'+this.route.snapshot.params.id).subscribe((data) => {
          this.wp_content = data;
    });
  }

}
