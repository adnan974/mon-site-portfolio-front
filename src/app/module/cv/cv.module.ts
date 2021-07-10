import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './pages/cv.component';
import { VerticalTimelineComponent } from 'src/app/shared/components/vertical-timeline/vertical-timeline.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { CvService } from 'src/app/core/services/cv.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider'; 

@NgModule({
  declarations: [
    
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    SharedModuleModule,
    MatDividerModule
    
  ],
  providers:[]
})
export class CvModule { }
