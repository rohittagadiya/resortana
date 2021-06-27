import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  async OpenDialog() {
    const modal = await this.modalController.create({
      component: ModalpagePage,
      cssClass: 'modal-page-class',
      swipeToClose: true,
      animated: true,
      backdropDismiss: true,
      showBackdrop: false,
      // componentProps: { message: message },
      // mode: "ios"
    });
    return await modal.present();

   /*  this.dialogs.alert('Hello world')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e)); */
  }
}
