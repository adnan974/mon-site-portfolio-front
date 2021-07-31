import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public faGithub = faGithub;
  public faRocket = faRocket;
  
  public projectsData!:any;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((projectsData)=>{
      this.projectsData = projectsData.data
    })
  }

}
