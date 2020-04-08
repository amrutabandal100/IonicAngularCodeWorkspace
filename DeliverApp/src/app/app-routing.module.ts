import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'earingandincentives',
    loadChildren: () => import('./earingandincentives/earingandincentives.module').then( m => m.EaringandincentivesPageModule)
  },
  {
    path: 'bank-details',
    loadChildren: () => import('./bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'login-history',
    loadChildren: () => import('./login-history/login-history.module').then( m => m.LoginHistoryPageModule)
  },
  {
    path: 'weekly-login-details',
    loadChildren: () => import('./weekly-login-details/weekly-login-details.module').then( m => m.WeeklyLoginDetailsPageModule)
  },
  {
    path: 'floating-cash',
    loadChildren: () => import('./floating-cash/floating-cash.module').then( m => m.FloatingCashPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'order-id',
    loadChildren: () => import('./order-id/order-id.module').then( m => m.OrderIdPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'invitefriend',
    loadChildren: () => import('./invitefriend/invitefriend.module').then( m => m.InvitefriendPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
