import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTimelineContentComponent } from './vertical-timeline-content.component';

describe('VerticalTimelineContentComponent', () => {
  let component: VerticalTimelineContentComponent;
  let fixture: ComponentFixture<VerticalTimelineContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalTimelineContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTimelineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
