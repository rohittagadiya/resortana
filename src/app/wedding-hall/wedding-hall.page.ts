import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-hall',
  templateUrl: './wedding-hall.page.html',
  styleUrls: ['./wedding-hall.page.scss'],
})
export class WeddingHallPage implements OnInit {

  booking_list: Object[] = [
    {
      img: './assets/images/6.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/7.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/8.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/1.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/2.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/3.jpg',
      name: 'Resort 1',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
