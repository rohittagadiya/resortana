import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

import { ItemDetailsPage } from './item-details.page';
import { IonicRatingModule } from 'ionic-rating';
// import { GoogleMaps } from '@ionic-native/google-maps';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule,
    IonicRatingModule,
  ],
  declarations: [ItemDetailsPage],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // GoogleMaps
  ],
})
export class ItemDetailsPageModule {}
