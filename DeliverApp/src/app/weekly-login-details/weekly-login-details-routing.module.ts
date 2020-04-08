import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyLoginDetailsPage } from './weekly-login-details.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyLoginDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyLoginDetailsPageRoutingModule {}
