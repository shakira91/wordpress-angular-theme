import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() frontPageContentLodaded; //if the content on the front page has loaded, load navigation
  logoUrl: any;
  navItems: any;
  navItemsArray = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  navItemClicked(navItem) {
    const title = navItem.navTitle.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['pages/'+ title]);
    
  }

  ngOnInit() {
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/site-logo').subscribe((data) => {
     this.logoUrl = data;
     console.log(this.logoUrl.split(","))
    });
    this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/menus').subscribe((data) => {
     this.navItems = data;
      this.navItems.forEach((element, index) => {
      const navItemsObj = {};
         navItemsObj['navID'] = element.ID;
         navItemsObj['navTitle'] = element.title;
         navItemsObj['navParentID'] = element.menu_item_parent;
         navItemsObj['navPageID'] = element.object_id;
         this.navItemsArray.push(navItemsObj)
      });  
    });
  }

}
