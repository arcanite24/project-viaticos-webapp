import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGlobalesComponent } from './gastos-globales.component';

describe('GastosGlobalesComponent', () => {
  let component: GastosGlobalesComponent;
  let fixture: ComponentFixture<GastosGlobalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGlobalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
