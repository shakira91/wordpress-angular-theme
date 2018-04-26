import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() frontPageContentLodaded; //if the content on the front page has loaded, load navigation
  navItems: any;
  navItemsArray = [];

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) { }

  // navItemHovered(navItem, event) {
  //   if(navItem.menu_item_parent > 0) {
  //     this.renderer.addClass(event.target, 'sub-menu')
  //   }
    
  // }

  ngOnInit() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/menus').subscribe((data) => {
     this.navItems = data;
      this.navItems.forEach((element, index) => {
      const navItemsObj = {};
         navItemsObj['navID'] = element.ID;
         navItemsObj['navTitle'] = element.title;
         navItemsObj['navParentID'] = element.menu_item_parent;
         this.navItemsArray.push(navItemsObj)
      });  
    });
    console.log(this.navItemsArray)
  }

}
