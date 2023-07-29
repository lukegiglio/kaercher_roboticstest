import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsTestSelectionComponent } from './robotics-test-selection.component';

describe('RoboticsTestSelectionComponent', () => {
  let component: RoboticsTestSelectionComponent;
  let fixture: ComponentFixture<RoboticsTestSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsTestSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsTestSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
