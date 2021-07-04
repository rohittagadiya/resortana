import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageTabsPageRoutingModule } from './main-page-tabs-routing.module';

import { MainPageTabsPage } from './main-page-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageTabsPageRoutingModule
  ],
  declarations: [MainPageTabsPage]
})
export class MainPageTabsPageModule {}
