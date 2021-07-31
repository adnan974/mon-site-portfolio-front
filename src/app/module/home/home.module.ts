import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 


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
    SharedModuleModule,
    MatProgressSpinnerModule        

  ]
})
export class HomeModule { }
