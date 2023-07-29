import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedRobotService } from '../robotics-test-service/robotics-test-service-shared-robot';

@Component({
  selector: 'app-robotics-test-selection',
  templateUrl: './robotics-test-selection.component.html',
  styleUrls: ['./robotics-test-selection.component.scss']
})
export class RoboticsTestSelectionComponent {
  @Output() uploadEvent = new EventEmitter<any>;
  @Output() animationEvent = new EventEmitter<number>;
  animationFps: number = 0;

  constructor(
    private messageService: MessageService,
    private sharedRobotService: SharedRobotService
    ) {
      this.sharedRobotService.currentRobot.subscribe(robot => this.uploadEvent.emit(robot));
    }

  /**
   * On upload event
   * @param event
   * @param uploadedFile
   */
  onUpload(event: any, uploadedFile: any) {
    this.readFile(event.files[0]);
    uploadedFile.clear();
  }

  /**
   * On animate event
   */
  onAnimate() {
    this.animationEvent.emit(this.animationFps);
  }

  /**
   * Read a file
   * @param file
   * @private
   */
  private readFile(file: any) {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = () => {
      const readJson: string = fileReader.result as string;
      const parsedJson = this.parseJSONString(readJson);
      if (this.isRobotDataValid(parsedJson)) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'JSON file uploaded successfully!' });
        this.uploadEvent.emit(parsedJson);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Robot data invalid!' });
      }
    }
    fileReader.onerror = (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Could not read JSON file!\n' + fileReader.error });
    }
  }

  /**
   * Check if the json file has valid data
   * @param parsedJson
   * @private
   */
  private isRobotDataValid(parsedJson: any): boolean {
    if (parsedJson == undefined || parsedJson.robot.length == 0 || parsedJson.cleaning_gadget.length == 0 || parsedJson.path.length == 0)
      return false;
    return true;
  }

  /**
   * Parse a JSON string
   * @param jsonString
   * @private
   */
  private parseJSONString(jsonString: string) {
    try  {
      return JSON.parse(jsonString);
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid JSON file format!\n' + error });
      return undefined;
    }
  }
}
