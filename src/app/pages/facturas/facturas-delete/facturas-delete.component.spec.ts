import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasDeleteComponent } from './facturas-delete.component';

describe('FacturasDeleteComponent', () => {
  let component: FacturasDeleteComponent;
  let fixture: ComponentFixture<FacturasDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
