import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGlobalesAddComponent } from './gastos-globales-add.component';

describe('GastosGlobalesAddComponent', () => {
  let component: GastosGlobalesAddComponent;
  let fixture: ComponentFixture<GastosGlobalesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGlobalesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGlobalesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
