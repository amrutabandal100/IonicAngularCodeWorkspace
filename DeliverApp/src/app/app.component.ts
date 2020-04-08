import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
   
    {
      title: 'Invite a Friend',
      url: '/invitefriend',
      icon: 'person-add'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Home',
      url: '/folder/Home',
      icon: 'home'
    },
    {
      title: 'Orders',
      url: '/order-id',
      icon: 'list'
    },
    {
      title: 'Earing History',
      url: '/earingandincentives',
      icon: 'cash'
    },
    {
      title: 'Login-History',
      url: '/login-history',
      icon: 'time'
    },
    {
      title: 'Bank-Details',
      url: '/bank-details',
      icon: 'home'
    },
    {
      title: 'Terms & conditions',
      url: '/legal',
      icon: 'list'
    },
    {
      title: 'Stop Duty',
      url: '/',
      icon: 'pause'
    },
    {
      title: 'Login',
      url: '/',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    },
   
   


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
