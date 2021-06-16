import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ProjectRoutingModule,
    FlexLayoutModule
  ]
})
export class ProjectModule { }
