import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EaringandincentivesPage } from './earingandincentives.page';

describe('EaringandincentivesPage', () => {
  let component: EaringandincentivesPage;
  let fixture: ComponentFixture<EaringandincentivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaringandincentivesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EaringandincentivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
