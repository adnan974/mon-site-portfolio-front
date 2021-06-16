import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectComponent } from '../project/pages/project.component'; 
import { VerticalTimelineComponent } from 'src/app/shared/components/vertical-timeline/vertical-timeline.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';



@NgModule({
  declarations: [
    HomeComponent
    
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    SharedModuleModule
    
    
    
  ]
})
export class HomeModule { }
