import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';



@NgModule({
  declarations: [VerticalTimelineComponent],
  imports: [
    CommonModule
  ],
  exports:[
    VerticalTimelineComponent
  ]
})
export class SharedModuleModule { }
