import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasAdminComponent } from './facturas-admin.component';

describe('FacturasAdminComponent', () => {
  let component: FacturasAdminComponent;
  let fixture: ComponentFixture<FacturasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
