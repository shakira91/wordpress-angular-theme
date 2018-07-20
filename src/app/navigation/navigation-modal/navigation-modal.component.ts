import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-modal',
  templateUrl: './navigation-modal.component.html',
  styleUrls: ['./navigation-modal.component.css']
})
export class NavigationModalComponent implements OnInit {
  @Input() menu: boolean;
  navItems: any;
  navItemsArray = [];

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) { }

  navItemClicked(navItem) {
    const title = navItem.navTitle.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['pages/'+ title]);
    
  }

  ngOnInit() {
    this.http.get('http://dev.etherealcreative.com/wp-json/custom/v1/menus').subscribe((data) => {
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
