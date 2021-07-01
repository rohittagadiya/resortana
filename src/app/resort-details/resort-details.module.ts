import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortDetailsPageRoutingModule } from './resort-details-routing.module';

import { ResortDetailsPage } from './resort-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResortDetailsPageRoutingModule
  ],
  declarations: [ResortDetailsPage]
})
export class ResortDetailsPageModule {}
