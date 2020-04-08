import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderIdPage } from './order-id.page';

const routes: Routes = [
  {
    path: '',
    component: OrderIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderIdPageRoutingModule {}
