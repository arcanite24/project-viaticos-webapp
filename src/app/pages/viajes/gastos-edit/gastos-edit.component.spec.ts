import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosEditComponent } from './gastos-edit.component';

describe('GastosEditComponent', () => {
  let component: GastosEditComponent;
  let fixture: ComponentFixture<GastosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
