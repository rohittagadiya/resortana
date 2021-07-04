import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  recommended_list: Object[] = [
    {
      img: './assets/images/6.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/7.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/8.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/1.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/2.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/3.jpg',
      name: 'Resort 1',
      info: 'Las Vegas',
      date: '24-06-21',
      rate: 4.6
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
