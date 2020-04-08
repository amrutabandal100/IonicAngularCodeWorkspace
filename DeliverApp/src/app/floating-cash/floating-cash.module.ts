import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingCashPageRoutingModule } from './floating-cash-routing.module';

import { FloatingCashPage } from './floating-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingCashPageRoutingModule
  ],
  declarations: [FloatingCashPage]
})
export class FloatingCashPageModule {}
