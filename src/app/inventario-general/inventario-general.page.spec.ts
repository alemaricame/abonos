import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioGeneralPage } from './inventario-general.page';

describe('InventarioGeneralPage', () => {
  let component: InventarioGeneralPage;
  let fixture: ComponentFixture<InventarioGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
