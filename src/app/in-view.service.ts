import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InViewService {
  constructor() { }
  showLifeStyle: boolean;
  showBrand: boolean;
  showSales: boolean;

  checkIfInView(lifestyle, brand, sales) {
    var boundingLifeStyle = lifestyle.nativeElement.getBoundingClientRect();
    var boundingBrand = brand.nativeElement.getBoundingClientRect();
    var boundingSales = sales.nativeElement.getBoundingClientRect();

    if (boundingLifeStyle.top >= 0 && boundingLifeStyle.left >= 0 &&
      boundingLifeStyle.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      boundingLifeStyle.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      this.showLifeStyle = true;
    }
    if (boundingBrand.top >= 0 && boundingBrand.left >= 0 &&
      boundingBrand.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      boundingBrand.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      this.showBrand = true;
    }
    if (boundingSales.top >= 0 && boundingSales.left >= 0 &&
      boundingSales.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      boundingSales.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      this.showSales = true;
    }
  }
}
