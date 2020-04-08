import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EaringandincentivesPageRoutingModule } from './earingandincentives-routing.module';

import { EaringandincentivesPage } from './earingandincentives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EaringandincentivesPageRoutingModule
  ],
  declarations: [EaringandincentivesPage]
})
export class EaringandincentivesPageModule {}
