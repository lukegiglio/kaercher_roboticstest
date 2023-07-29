import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsTestContentComponent } from './robotics-test-content.component';

describe('RoboticsTestContentComponent', () => {
  let component: RoboticsTestContentComponent;
  let fixture: ComponentFixture<RoboticsTestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsTestContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsTestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
