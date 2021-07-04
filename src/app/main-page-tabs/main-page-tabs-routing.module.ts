import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPagePage } from '../main-page/main-page.page';

import { MainPageTabsPage } from './main-page-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainPageTabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPagePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageTabsPageRoutingModule { }
