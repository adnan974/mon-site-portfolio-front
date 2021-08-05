import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {





  @Input() skillData!:any;


  constructor() { }

  ngOnInit(): void {
    console.log("test");
    console.log(this.skillData)
  }

}
