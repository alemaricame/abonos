import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditosVendedorPage } from './creditos-vendedor.page';

describe('CreditosVendedorPage', () => {
  let component: CreditosVendedorPage;
  let fixture: ComponentFixture<CreditosVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditosVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
