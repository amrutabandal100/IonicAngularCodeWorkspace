import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderIdPage } from './order-id.page';

describe('OrderIdPage', () => {
  let component: OrderIdPage;
  let fixture: ComponentFixture<OrderIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
