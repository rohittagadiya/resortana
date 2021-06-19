import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateReviewPageRoutingModule } from './rate-review-routing.module';

import { RateReviewPage } from './rate-review.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateReviewPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [RateReviewPage]
})
export class RateReviewPageModule {}
