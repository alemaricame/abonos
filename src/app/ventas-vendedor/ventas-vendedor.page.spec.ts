import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentasVendedorPage } from './ventas-vendedor.page';

describe('VentasVendedorPage', () => {
  let component: VentasVendedorPage;
  let fixture: ComponentFixture<VentasVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentasVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
