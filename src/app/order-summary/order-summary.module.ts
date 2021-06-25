import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderSummaryPageRoutingModule } from './order-summary-routing.module';

import { OrderSummaryPage } from './order-summary.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSummaryPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [OrderSummaryPage]
})
export class OrderSummaryPageModule {}
