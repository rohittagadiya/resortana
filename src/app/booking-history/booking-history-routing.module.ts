import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingHistoryPage } from './booking-history.page';

const routes: Routes = [
  {
    path: '',
    component: BookingHistoryPage,
    children: [
      /* {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      }, */
      {
        path: '',
        loadChildren: () => import('../wedding-hall/wedding-hall.module').then(m => m.WeddingHallPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingHistoryPageRoutingModule {}
