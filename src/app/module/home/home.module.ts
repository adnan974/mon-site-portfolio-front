import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectComponent } from '../project/pages/project.component'; 



@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    VerticalTimelineModule,
    MatDividerModule
    
  ]
})
export class HomeModule { }
