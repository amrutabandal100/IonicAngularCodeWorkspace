import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private keyboard: Keyboard) {
    
   }

  ngOnInit() {
  }
  onkeyboard(){
    this.keyboard.show();
  }

}
