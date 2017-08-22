import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesGastosComponent } from './viajes-gastos.component';

describe('ViajesGastosComponent', () => {
  let component: ViajesGastosComponent;
  let fixture: ComponentFixture<ViajesGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
