import { Observable, BehaviorSubject } from 'rxjs';

export class SharedRobotService {
    private subject = new BehaviorSubject(undefined);
    currentRobot = this.subject.asObservable();

    sendEvent(robot: any) {
        this.subject.next(robot);
    }
}