import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusTripComponent } from './all-bus-trip.component';

describe('AllBusTripComponent', () => {
  let component: AllBusTripComponent;
  let fixture: ComponentFixture<AllBusTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBusTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBusTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
