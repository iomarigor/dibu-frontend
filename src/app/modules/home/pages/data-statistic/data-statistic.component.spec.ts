import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStatisticComponent } from './data-statistic.component';

describe('DataStatisticComponent', () => {
  let component: DataStatisticComponent;
  let fixture: ComponentFixture<DataStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStatisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
