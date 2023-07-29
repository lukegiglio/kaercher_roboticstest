import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsTestPageComponent } from './robotics-test-page.component';

describe('RoboticsTestPageComponent', () => {
  let component: RoboticsTestPageComponent;
  let fixture: ComponentFixture<RoboticsTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsTestPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
