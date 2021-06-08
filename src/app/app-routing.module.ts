import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalTimelineComponent } from 'angular-vertical-timeline';
import { HomeComponent } from './module/home/pages/home.component';


const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./module/home/home.module').then(module=>module.HomeModule)

  },
  {
    path:'project',
    loadChildren: ()=> import('./module/project/project.module').then(module=>module.ProjectModule)

  },
  {
    path:'cv',
    loadChildren: ()=> import('./module/cv/cv.module').then(module=>module.CvModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
