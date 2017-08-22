import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesDetailComponent } from './viajes-detail.component';

describe('ViajesDetailComponent', () => {
  let component: ViajesDetailComponent;
  let fixture: ComponentFixture<ViajesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
