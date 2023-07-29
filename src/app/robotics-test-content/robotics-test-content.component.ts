import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedRobotService } from '../robotics-test-service/robotics-test-service-shared-robot';
import { Subscription } from 'rxjs/internal/Subscription';
import { RobotData } from '../robotics-test-model/robotics-test-model-robotdata';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-robotics-test-content',
  templateUrl: './robotics-test-content.component.html',
  styleUrls: ['./robotics-test-content.component.scss']
})
export class RoboticsTestContentComponent implements OnInit {
  uploadEventSub:Subscription;
  robot: any;
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  originX: number = 0;
  originY: number = 0;
  robotData!: RobotData;

  constructor(
    private sharedRobotService: SharedRobotService,
    private messageService: MessageService,
  ) {
    this.uploadEventSub = this.sharedRobotService.currentRobot.subscribe(robot => {
      this.robot = robot
      this.processRobotData(this.robot);
    });
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.transformToCartesian();
  }

  /**
   * Trigger the processing of the robot data
   * @param robotJson
   */
  public processRobotData(robotJson: any) {
    this.clearCanvas();
    this.robotData = new RobotData(this.ctx, robotJson);
    this.robotData.draw();
  }

  /**
   * Trigger the animation
   */
  public async startAnimation(animationFps: number) {
    if (this.robotData == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Robot data not available or invalid!' });
      return;
    }
    this.clearCanvas();
    this.robotData.animate(animationFps);
  }



  /**
   * Clear the canvas
   * @private
   */
  private clearCanvas() {
    const canvas = this.ctx.canvas;
    this.ctx.clearRect(this.originX * -1, this.originY * -1, canvas.width, canvas.height);
  }

  /**
   * Transform canvas coordinate system to cartesian
   * @private
   */
  private transformToCartesian() {
    this.originX = this.ctx.canvas.width / 2;
    this.originY = this.ctx.canvas.height / 2;
    this.ctx.translate(this.originX, this.originY);
  }
}
