import { Component, OnInit } from '@angular/core';
import { TimelineContent } from '../../models/timeline-content';

@Component({
  selector: 'vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {

  public timeline_content: Array<TimelineContent> = []

  constructor() { }

  ngOnInit(): void {
    this.timeline_content.push(new TimelineContent("heading 1","corps 1"));
  }


}
