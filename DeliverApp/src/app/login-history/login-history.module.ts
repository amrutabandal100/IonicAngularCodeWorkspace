import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginHistoryPageRoutingModule } from './login-history-routing.module';

import { LoginHistoryPage } from './login-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginHistoryPageRoutingModule
  ],
  declarations: [LoginHistoryPage]
})
export class LoginHistoryPageModule {}
