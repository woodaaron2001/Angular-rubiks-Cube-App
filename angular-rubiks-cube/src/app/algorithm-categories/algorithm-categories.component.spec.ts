import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmCategoriesComponent } from './algorithm-categories.component';

describe('AlgorithmCategoriesComponent', () => {
  let component: AlgorithmCategoriesComponent;
  let fixture: ComponentFixture<AlgorithmCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
