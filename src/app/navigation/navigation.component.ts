import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  logoUrl: any;
  @Input() menu: boolean = false;
  @ViewChild("hamburger") hamburger;
  hideMenu: boolean = false;

  constructor(private http: HttpClient, private service: SharedServiceService, private elRef: ElementRef, private renderer: Renderer2) { }


  menuClicked() {
    this.menu = !this.menu;
    if (this.menu) {
      this.renderer.addClass(this.hamburger.nativeElement, "is-active");
    } else {
      this.renderer.removeClass(this.hamburger.nativeElement, "is-active");
    }

  }


  closeMenu(event) {
    if (event == false) {
      this.menu = false;
      this.renderer.removeClass(this.hamburger.nativeElement, "is-active");
    }
  }

  ngOnInit() {

    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/site-logo').subscribe((data) => {
      this.logoUrl = data;
    });
  }

}
