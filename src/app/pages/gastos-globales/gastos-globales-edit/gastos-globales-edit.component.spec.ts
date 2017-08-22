import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGlobalesEditComponent } from './gastos-globales-edit.component';

describe('GastosGlobalesEditComponent', () => {
  let component: GastosGlobalesEditComponent;
  let fixture: ComponentFixture<GastosGlobalesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGlobalesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGlobalesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
