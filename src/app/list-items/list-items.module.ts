import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemsPageRoutingModule } from './list-items-routing.module';

import { ListItemsPage } from './list-items.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListItemsPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [ListItemsPage]
})
export class ListItemsPageModule {}
