import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasEditComponent } from './facturas-edit.component';

describe('FacturasEditComponent', () => {
  let component: FacturasEditComponent;
  let fixture: ComponentFixture<FacturasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
