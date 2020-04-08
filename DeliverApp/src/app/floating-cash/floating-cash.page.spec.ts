import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloatingCashPage } from './floating-cash.page';

describe('FloatingCashPage', () => {
  let component: FloatingCashPage;
  let fixture: ComponentFixture<FloatingCashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingCashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingCashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
