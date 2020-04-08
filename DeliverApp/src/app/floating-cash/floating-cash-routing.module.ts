import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingCashPage } from './floating-cash.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingCashPageRoutingModule {}
