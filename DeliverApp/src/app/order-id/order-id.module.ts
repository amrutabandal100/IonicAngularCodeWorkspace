import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderIdPageRoutingModule } from './order-id-routing.module';

import { OrderIdPage } from './order-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderIdPageRoutingModule
  ],
  declarations: [OrderIdPage]
})
export class OrderIdPageModule {}
