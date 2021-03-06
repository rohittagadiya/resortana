import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sort-by',
    loadChildren: () => import('./sort-by/sort-by.module').then(m => m.SortByPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'rate-review',
    loadChildren: () => import('./rate-review/rate-review.module').then(m => m.RateReviewPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then(m => m.SplashScreenPageModule)
  },
  {
    path: 'room-details',
    loadChildren: () => import('./room-details/room-details.module').then(m => m.RoomDetailsPageModule)
  },
  {
    path: 'order-summary',
    loadChildren: () => import('./order-summary/order-summary.module').then(m => m.OrderSummaryPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./booking-history/booking-history.module').then(m => m.BookingHistoryPageModule)
  },
  {
    path: 'wedding-hall',
    loadChildren: () => import('./wedding-hall/wedding-hall.module').then(m => m.WeddingHallPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'main-page',
        loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPagePageModule)
      },
      {
        path: 'main-page-tabs',
        loadChildren: () => import('./main-page-tabs/main-page-tabs.module').then(m => m.MainPageTabsPageModule)
      },
    ]
    // loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }, */
  {
    path: 'item-details',
    loadChildren: () => import('./item-details/item-details.module').then(m => m.ItemDetailsPageModule)
  },
  {
    path: 'list-items',
    loadChildren: () => import('./list-items/list-items.module').then(m => m.ListItemsPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./rewards/rewards.module').then(m => m.RewardsPageModule)
  },
  {
    path: 'modalpage',
    loadChildren: () => import('./modalpage/modalpage.module').then(m => m.ModalpagePageModule)
  }, {
    path: 'wedding-details',
    loadChildren: () => import('./wedding-details/wedding-details.module').then(m => m.WeddingDetailsPageModule)
  },
  {
    path: 'resort',
    loadChildren: () => import('./resort/resort.module').then(m => m.ResortPageModule)
  },
  {
    path: 'resort-details',
    loadChildren: () => import('./resort-details/resort-details.module').then(m => m.ResortDetailsPageModule)
  },
  {
    path: 'main-page-tabs',
    loadChildren: () => import('./main-page-tabs/main-page-tabs.module').then(m => m.MainPageTabsPageModule)
  },

  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPagePageModule)
  },  {
    path: 'map-view',
    loadChildren: () => import('./map-view/map-view.module').then( m => m.MapViewPageModule)
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
