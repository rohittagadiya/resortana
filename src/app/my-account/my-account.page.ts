import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  my_account_options: String[] = [
    'Booking History',
    'Seeting',
    'My Profile',
    'Rate the App',
    'About the App',
    'Contact s',
    'Logout'
  ]

  constructor() { }

  ngOnInit() {
  }

}
