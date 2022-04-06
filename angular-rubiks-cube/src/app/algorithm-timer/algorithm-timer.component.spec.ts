import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmTimerComponent } from './algorithm-timer.component';

describe('AlgorithmTimerComponent', () => {
  let component: AlgorithmTimerComponent;
  let fixture: ComponentFixture<AlgorithmTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
