import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioVendedorPage } from './inventario-vendedor.page';

describe('InventarioVendedorPage', () => {
  let component: InventarioVendedorPage;
  let fixture: ComponentFixture<InventarioVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
