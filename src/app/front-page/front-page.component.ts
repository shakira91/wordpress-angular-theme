import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  navLoaded: boolean;
  wp_content: any;
  wp_widgetMainContent: any;
  wp_categoryData: any = [];
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private service: SharedServiceService) { }

  // categoryClicked(id) {
  //   this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/media?categories='+id).subscribe((data) => {
  //     console.log(data)
  //   });
  // }

  ngOnInit() {
    this.navLoaded = this.service.navContentLoaded()
    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/front-page').subscribe((data) => {
      this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/pages/'+data).subscribe((data) => {
        this.wp_content = data;
      });
     });
    //  this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/main-widgets', {responseType: 'text'}).subscribe((data) => {
    //     this.wp_widgetMainContent = data;
    // });
    this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/categories').subscribe((data) => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          if(data[key].name !== 'Uncategorized') {
            this.wp_categoryData.push(data[key]);
          }  
        }
     }
    });
  }
}
