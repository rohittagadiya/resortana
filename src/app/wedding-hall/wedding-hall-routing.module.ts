import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingHallPage } from './wedding-hall.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingHallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingHallPageRoutingModule {}
