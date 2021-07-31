import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title = 'mon-site-web-portfolio';
  

  constructor(private _snackBar:MatSnackBar){}

  ngOnInit(){
    //TODO
    this._snackBar.open("Attention: Le site est en cours de construction. Mais les parties CV et Projet sont fonctionnelles !", "ok");
  }
}
