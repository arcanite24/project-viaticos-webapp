import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosAdddComponent } from './gastos-addd.component';

describe('GastosAdddComponent', () => {
  let component: GastosAdddComponent;
  let fixture: ComponentFixture<GastosAdddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosAdddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosAdddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
