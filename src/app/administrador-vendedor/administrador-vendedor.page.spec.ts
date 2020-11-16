import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministradorVendedorPage } from './administrador-vendedor.page';

describe('AdministradorVendedorPage', () => {
  let component: AdministradorVendedorPage;
  let fixture: ComponentFixture<AdministradorVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradorVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
