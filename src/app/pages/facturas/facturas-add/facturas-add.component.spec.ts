import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasAddComponent } from './facturas-add.component';

describe('FacturasAddComponent', () => {
  let component: FacturasAddComponent;
  let fixture: ComponentFixture<FacturasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
