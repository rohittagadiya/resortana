import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDetailsPageRoutingModule } from './room-details-routing.module';

import { RoomDetailsPage } from './room-details.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDetailsPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [RoomDetailsPage]
})
export class RoomDetailsPageModule {}
