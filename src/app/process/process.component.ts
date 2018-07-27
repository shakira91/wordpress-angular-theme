import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
