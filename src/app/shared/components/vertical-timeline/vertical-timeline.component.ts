import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from 'src/app/core/services/cv.service';
import { TimelineContent } from '../../models/timeline-content';

@Component({
  selector: 'vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {

  public timeline_content: Array<TimelineContent> = []

  public cvData!:Array<any>;

  @Output() isDataLoaded = new EventEmitter<boolean>();

  constructor(private cvService:CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((cvData)=>{
      this.cvData = cvData;
      this.isDataLoaded.emit(true);
    })
    this.timeline_content.push(new TimelineContent("heading 1","corps 1"));
  }


}
