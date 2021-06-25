import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public navCtrl: NavController
  ) { }

  goToPage(route) {
    switch (route) {
      case 'home':
        this.navCtrl.navigateRoot('tabs');
        break;
      case 'room-details':
        this.navCtrl.navigateRoot('room-details');
        break;
      case 'order-summary':
        this.navCtrl.navigateRoot('order-summary');
        break;
      case 'booking-history':
        this.navCtrl.navigateRoot('booking-history');
        break;
      case 'change-pwd':
        this.navCtrl.navigateRoot('change-password');
        break;
      case 'edit-profile':
        this.navCtrl.navigateRoot('edit-profile');
        break;
      case 'profile':
        this.navCtrl.navigateRoot('profile');
        break;
      case 'forgot-pwd':
        this.navCtrl.navigateRoot('forgot-password');
        break;
      case 'sort-by':
        this.navCtrl.navigateRoot('sort-by');
        break;
      case 'filter':
        this.navCtrl.navigateRoot('filter');
        break;
      case 'my-acnt':
        this.navCtrl.navigateRoot('my-account');
        break;
      case 'setting':
        this.navCtrl.navigateRoot('settings');
        break;
      case 'login':
        this.navCtrl.navigateRoot('login');
        break;
      case 'sign-up':
        this.navCtrl.navigateRoot('sign-up');
        break;
      case 'notification':
        this.navCtrl.navigateRoot('notifications');
        break;
      case 'rating':
        this.navCtrl.navigateRoot('rate-review');
        break;
      case 'splash-screen':
        this.navCtrl.navigateRoot('splash-screen');
        break;
      case 'checkout':
        this.navCtrl.navigateRoot('checkout');
        break;
        case 'item-details':
        this.navCtrl.navigateRoot('item-details');
        break;       
      default:
        break;
    }
  }
}
