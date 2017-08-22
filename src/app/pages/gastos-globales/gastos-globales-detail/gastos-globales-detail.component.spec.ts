import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGlobalesDetailComponent } from './gastos-globales-detail.component';

describe('GastosGlobalesDetailComponent', () => {
  let component: GastosGlobalesDetailComponent;
  let fixture: ComponentFixture<GastosGlobalesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGlobalesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGlobalesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
