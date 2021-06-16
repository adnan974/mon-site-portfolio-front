import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './pages/cv.component';
import { VerticalTimelineComponent } from 'src/app/shared/components/vertical-timeline/vertical-timeline.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';


@NgModule({
  declarations: [
    
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    SharedModuleModule
  ]
})
export class CvModule { }
