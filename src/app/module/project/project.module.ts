import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectService } from 'src/app/core/services/project.service';
import {  HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ProjectRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers:[ProjectService]
})
export class ProjectModule { }
