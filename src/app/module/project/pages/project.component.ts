import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projectsData!:any;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.projectService.getAllProjects().subscribe((projectsData)=>{
      this.projectsData = projectsData.data
    })
  }

}
