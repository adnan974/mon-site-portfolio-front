import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { CvService } from '../core/services/cv.service';
import { SkillsBarComponent } from './components/skills-bar/skills-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [VerticalTimelineComponent, SkillsBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports:[
    VerticalTimelineComponent,
    SkillsBarComponent
  ],
  providers:[CvService]
})
export class SharedModuleModule { }
