import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesDeleteComponent } from './viajes-delete.component';

describe('ViajesDeleteComponent', () => {
  let component: ViajesDeleteComponent;
  let fixture: ComponentFixture<ViajesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
