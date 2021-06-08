import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule,} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { VerticalTimelineComponent } from './shared/components/vertical-timeline/vertical-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalTimelineComponent,
    
    
    
  ],
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
