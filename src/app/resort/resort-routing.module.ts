import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResortPage } from './resort.page';

const routes: Routes = [
  /* {
    path: '',
    component: ResortPage
  } */
  {
    path: '',
    component: ResortPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../resort-details/resort-details.module').then( m => m.ResortDetailsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResortPageRoutingModule {}
