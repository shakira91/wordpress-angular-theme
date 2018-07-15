import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  wp_categoryDataImage: any = [];

  ngOnInit() {
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/categories?slug='+this.route.snapshot.params.id).subscribe((data) => {
      this.http.get(data["0"]._links["wp:post_type"]['1'].href).subscribe((data) => {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            this.wp_categoryDataImage.push(data[key].source_url); 
          }
       }
      });
    });
  }
}
