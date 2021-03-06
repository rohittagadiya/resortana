import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPagePage } from '../main-page/main-page.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'main-page',
    component: MainPagePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
