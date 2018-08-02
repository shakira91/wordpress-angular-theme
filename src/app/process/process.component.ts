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
    'http://dev.etherealcreative.com/wp-content/uploads/2018/07/49-chambers_waterfront_lifestyle-14.jpg'
  ];
  defaultImage = 'https://images.unsplash.com/photo-1468413922365-e3766a17da9e?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';
  backgroundImage = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  offset = 100;
  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
