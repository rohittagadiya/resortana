import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  services_list: Object[] = [
    {
      icon: './assets/images/resort_villas.png',
      title: 'Resort & Villas'
    },
    {
      icon: './assets/images/wedding_hall.png',
      title: 'Wedding Hall'
    },
    {
      icon: './assets/images/camp.png',
      title: 'Camp'
    },
    {
      icon: './assets/images/services.png',
      title: 'Services'
    },
  ];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToMainPage(){
    this.navCtrl.navigateRoot('tabs/main-page-tabs');
  }

}
