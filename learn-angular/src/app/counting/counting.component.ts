import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  count = 0;
  constructor() { }

  countnumber(){
    this.count = this.count +1;
  }

  ngOnInit(): void {
  }

}
