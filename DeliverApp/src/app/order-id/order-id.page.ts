import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-id',
  templateUrl: './order-id.page.html',
  styleUrls: ['./order-id.page.scss'],
})
export class OrderIdPage implements OnInit {
  
  users: any[] = [
    {
      id: 1,
      value:'Accept'
    },
    {
      id: 2,
      value:'Reject'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
