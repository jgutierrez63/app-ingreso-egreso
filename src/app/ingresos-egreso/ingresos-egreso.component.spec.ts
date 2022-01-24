import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosEgresoComponent } from './ingresos-egreso.component';

describe('IngresosEgresoComponent', () => {
  let component: IngresosEgresoComponent;
  let fixture: ComponentFixture<IngresosEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosEgresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
