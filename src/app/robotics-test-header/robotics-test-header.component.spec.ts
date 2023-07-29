import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsTestHeaderComponent } from './robotics-test-header.component';

describe('RoboticsTestHeaderComponent', () => {
  let component: RoboticsTestHeaderComponent;
  let fixture: ComponentFixture<RoboticsTestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsTestHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsTestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
