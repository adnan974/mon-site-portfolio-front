import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { CvService } from '../core/services/cv.service';



@NgModule({
  declarations: [VerticalTimelineComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    VerticalTimelineComponent
  ],
  providers:[CvService]
})
export class SharedModuleModule { }
