import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/core/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public cvData!:Array<any>;

  public skillData = {
    frontSkills: [
      {
        name: 'HTML',
        pourcentageOfKnowledge: 90
      },
      {
        name: 'CSS',
        pourcentageOfKnowledge:70
      },
      {
        name: 'Javascript',
        pourcentageOfKnowledge: 90
      },
      {
        name: 'Angular',
        pourcentageOfKnowledge: 90
      },
      {
        name: 'Boostrap',
        pourcentageOfKnowledge: 80
      },
    ],

    backSkills:[
      {
        name: 'Node js',
        pourcentageOfKnowledge: 80
      },
      {
        name: 'Express js',
        pourcentageOfKnowledge: 90
      },
      {
        name: 'Nest js',
        pourcentageOfKnowledge: 90
      },
      {
        name: 'MongoDb',
        pourcentageOfKnowledge: 70
      },
      {
        name: 'Postgresql',
        pourcentageOfKnowledge: 80
      }
    ]
 }

  constructor() { }

  ngOnInit(): void {
   
  
  }

}
