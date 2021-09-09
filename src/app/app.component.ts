import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public icons = {
    faHome:faHome,
    faFileAlt:faFileAlt,
    faRocket:faRocket
  }
  public faFileAlt = faFileAlt;
  public faHome = faHome;
  public title = 'mon-site-web-portfolio';
  

  constructor(){}

  ngOnInit(){
    AOS.init({
      delay: 300,
    });

  }

  scrollToElement(element:any){

  }
}
