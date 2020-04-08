import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitefriendPage } from './invitefriend.page';

describe('InvitefriendPage', () => {
  let component: InvitefriendPage;
  let fixture: ComponentFixture<InvitefriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitefriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitefriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
