import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingDetailsPageRoutingModule } from './wedding-details-routing.module';

import { WeddingDetailsPage } from './wedding-details.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingDetailsPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [WeddingDetailsPage]
})
export class WeddingDetailsPageModule {}
