import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuteRegulationsComponent } from './statute-regulations.component';

describe('StatuteRegulationsComponent', () => {
  let component: StatuteRegulationsComponent;
  let fixture: ComponentFixture<StatuteRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatuteRegulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatuteRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
