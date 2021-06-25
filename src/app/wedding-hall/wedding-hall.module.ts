import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingHallPageRoutingModule } from './wedding-hall-routing.module';

import { WeddingHallPage } from './wedding-hall.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingHallPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [WeddingHallPage]
})
export class WeddingHallPageModule {}
