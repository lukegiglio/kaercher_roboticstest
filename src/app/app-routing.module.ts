import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoboticsTestPageComponent } from './robotics-test-page/robotics-test-page.component';

const routes: Routes = [
  {path: '', component: RoboticsTestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
