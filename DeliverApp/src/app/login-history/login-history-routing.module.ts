import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHistoryPage } from './login-history.page';

const routes: Routes = [
  {
    path: '',
    component: LoginHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginHistoryPageRoutingModule {}
