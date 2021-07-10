import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/core/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public cvData!:Array<any>;

  constructor() { }

  ngOnInit(): void {
   
  
  }

}
