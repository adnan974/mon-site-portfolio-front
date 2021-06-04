import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./module/home/home.module').then(module=>module.HomeModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
