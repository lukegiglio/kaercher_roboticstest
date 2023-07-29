import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoboticsTestHeaderComponent } from './robotics-test-header/robotics-test-header.component';
import { RoboticsTestFooterComponent } from './robotics-test-footer/robotics-test-footer.component';
import { RoboticsTestSelectionComponent } from './robotics-test-selection/robotics-test-selection.component';
import { RoboticsTestContentComponent } from './robotics-test-content/robotics-test-content.component';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { RoboticsTestPageComponent } from './robotics-test-page/robotics-test-page.component';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SharedRobotService } from './robotics-test-service/robotics-test-service-shared-robot';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    RoboticsTestHeaderComponent,
    RoboticsTestFooterComponent,
    RoboticsTestSelectionComponent,
    RoboticsTestContentComponent,
    RoboticsTestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ToolbarModule,
    PanelModule,
    FieldsetModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    SliderModule,
    FormsModule
  ],
  providers: [HttpClient, HttpClientModule, MessageService, SharedRobotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
