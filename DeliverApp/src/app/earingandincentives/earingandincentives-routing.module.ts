import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EaringandincentivesPage } from './earingandincentives.page';

const routes: Routes = [
  {
    path: '',
    component: EaringandincentivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EaringandincentivesPageRoutingModule {}
