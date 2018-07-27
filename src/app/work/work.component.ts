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
    this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/media').subscribe((data) => {

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          data[key].categories.forEach(element => {
            if (element > 1) {
              this.http.get('http://dev.etherealcreative.com/index.php/wp-json/wp/v2/media?categories=' + element).subscribe((data) => {
                for (var key in data) {
                  if (data.hasOwnProperty(key)) {
                    this.wp_categoryDataImage.push(data[key].source_url);
                  }
                }
              });
            }
          });

        }
      }
    });
  }
}
