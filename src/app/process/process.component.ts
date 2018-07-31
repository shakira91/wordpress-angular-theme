import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit, AfterViewInit {
  processImages = [
    'http://dev.etherealcreative.com/wp-content/uploads/2018/07/49-chambers_waterfront_lifestyle-14.jpg',
    'http://dev.etherealcreative.com/wp-content/uploads/2018/07/0N9A3046.jpg',
    'http://dev.etherealcreative.com/wp-content/uploads/2018/07/TRIBECAREDMOPED.jpg',
    'http://dev.etherealcreative.com/wp-content/uploads/2018/07/TRIBECAREDMOPED.jpg'
  ];

  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
