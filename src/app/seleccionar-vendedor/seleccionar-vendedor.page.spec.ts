import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionarVendedorPage } from './seleccionar-vendedor.page';

describe('SeleccionarVendedorPage', () => {
  let component: SeleccionarVendedorPage;
  let fixture: ComponentFixture<SeleccionarVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionarVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
