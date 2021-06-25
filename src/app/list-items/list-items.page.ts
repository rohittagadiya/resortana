import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {

  booking_list: Object[] = [
    {
      img: './assets/images/6.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/7.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/8.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/1.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/2.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    },
    {
      img: './assets/images/3.jpg',
      name: 'Wixor Resort',
      info: 'Bashra Heights (8.7) miles away..',
      date: '24-06-21',
      rate: 4.6
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
