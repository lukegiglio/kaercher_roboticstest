import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsTestFooterComponent } from './robotics-test-footer.component';

describe('RoboticsTestFooterComponent', () => {
  let component: RoboticsTestFooterComponent;
  let fixture: ComponentFixture<RoboticsTestFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsTestFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsTestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
