import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private renderer: Renderer2, private elRef: ElementRef) { }
  wp_categoryDataImage: any = [];
  wp_categoryDataCategory: any = [];
  defaultImage = 'https://images.unsplash.com/photo-1468413922365-e3766a17da9e?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';
  backgroundImage = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  offset = 100;

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  growImage(event) {
    this.renderer.addClass(event.target, 'grow')
  }

  ngOnInit() {
    this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/media?per_page=100').subscribe((data) => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.wp_categoryDataImage.push(data[key].source_url); //data[key].categories to get category name
          console.log(data[key])
        }
      }
    });
  }
}
