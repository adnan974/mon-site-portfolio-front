import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './pages/cv.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    SharedModuleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCardModule
    
  ],
  exports:[CvComponent]
})
export class CvModule { }
