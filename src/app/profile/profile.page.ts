import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile_options: Object[] = [
    {
      key: 'Email',
      value: 'john@gmail.com'
    },
    {
      key: 'Phone',
      value: '+966 145 9875'
    },
    {
      key: 'Nationality',
      value: 'UAE',
    },
    {
      key: 'Gender',
      value: 'Male'
    },
    {
      key: 'Address',
      value: '124 Street Dubai Apartment'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
