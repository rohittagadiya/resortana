import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  constructor() { }
  count: number = 0;
  ngOnInit() {
  }
  deducteCount(){
    this.count++;
  }
  increaseCount(){
    this.count++;
  }
}
