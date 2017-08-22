import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGlobalesDeleteComponent } from './gastos-globales-delete.component';

describe('GastosGlobalesDeleteComponent', () => {
  let component: GastosGlobalesDeleteComponent;
  let fixture: ComponentFixture<GastosGlobalesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGlobalesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGlobalesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
