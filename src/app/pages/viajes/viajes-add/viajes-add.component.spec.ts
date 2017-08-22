import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesAddComponent } from './viajes-add.component';

describe('ViajesAddComponent', () => {
  let component: ViajesAddComponent;
  let fixture: ComponentFixture<ViajesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
