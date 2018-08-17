import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { InViewService } from '../in-view.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  wp_content: any;
  wp_widgetMainContent: any;
  wp_categoryData: any = [];
  @ViewChild('lifestyle') lifestyle: ElementRef;
  @ViewChild('brand') brand: ElementRef;
  @ViewChild('sales') sales: ElementRef;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, public inview: InViewService, private renderer: Renderer2) { }

  // categoryClicked(id) {
  //   this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/media?categories='+id).subscribe((data) => {
  //     console.log(data)
  //   });
  // }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.inview.checkIfInView(this.lifestyle, this.brand, this.sales);
    if (this.inview.showLifeStyle) {
      this.renderer.addClass(this.lifestyle.nativeElement, "in-view");
    }
    if (this.inview.showBrand) {
      this.renderer.addClass(this.brand.nativeElement, "in-view");
    }
    if (this.inview.showSales) {
      this.renderer.addClass(this.sales.nativeElement, "in-view");
    }
  }

  ngOnInit() {
    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/front-page').subscribe((data) => {
      this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/pages/' + data).subscribe((data) => {
        this.wp_content = data;
      });
    });
    //  this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/main-widgets', {responseType: 'text'}).subscribe((data) => {
    //     this.wp_widgetMainContent = data;
    // });
    this.http.get('http://dev.etherealcreative.com/wp-json/wp/v2/categories').subscribe((data) => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          if (data[key].name !== 'Uncategorized') {
            this.wp_categoryData.push(data[key]);
          }
        }
      }
    });
  }
}
