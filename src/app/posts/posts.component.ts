import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  wp_contents: any;

  postClicked(id) {
    this.router.navigate(['post/'+id]);
  }

  ngOnInit() {
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/posts').subscribe((data) => {
          this.wp_contents = data;
    });
  }

}
