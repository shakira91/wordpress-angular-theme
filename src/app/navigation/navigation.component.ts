import { Component, OnInit, Input, AfterViewInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit  {
  logoUrl: any;
  navLoaded: boolean = false;
  @Input() menu: boolean = false;
  @ViewChild("hamburger") hamburger;

  constructor(private http: HttpClient, private service: SharedServiceService, private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit () {
    this.service.navContentLoaded();
  }

  menuClicked() {
    this.menu = !this.menu;
    if (this.menu) {
      this.renderer.addClass(this.hamburger.nativeElement, "is-active");
    } else  {
      this.renderer.removeClass(this.hamburger.nativeElement, "is-active");
    }
    
  }

  ngOnInit() {
    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/site-logo').subscribe((data) => {
     this.logoUrl = data;
    });
  }

}
