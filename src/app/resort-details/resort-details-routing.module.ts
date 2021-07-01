import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResortDetailsPage } from './resort-details.page';

const routes: Routes = [
  {
    path: '',
    component: ResortDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResortDetailsPageRoutingModule {}
