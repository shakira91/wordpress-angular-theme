import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changeNavBkgd: boolean;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private service: SharedServiceService) { }
  title = 'app';


  // @HostListener("window:scroll") pageScrolled() {
  //   if (location.pathname.substr(1) != "/") {
  //     if (window.scrollY > document.querySelectorAll(".lifestyle")[0].getBoundingClientRect().top) {
  //       this.changeNavBkgd = true;
  //     } else {
  //       this.changeNavBkgd = false;
  //     }
  //   } else {
  //     this.changeNavBkgd = true;
  //   }

  // }

  ngOnInit() {

    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/front-page').subscribe((data) => {
      if (data == '0') {
        this.router.navigate(['posts/']);
      }
    });

  }
}
