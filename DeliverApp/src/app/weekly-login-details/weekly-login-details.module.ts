import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyLoginDetailsPageRoutingModule } from './weekly-login-details-routing.module';

import { WeeklyLoginDetailsPage } from './weekly-login-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyLoginDetailsPageRoutingModule
  ],
  declarations: [WeeklyLoginDetailsPage]
})
export class WeeklyLoginDetailsPageModule {}
