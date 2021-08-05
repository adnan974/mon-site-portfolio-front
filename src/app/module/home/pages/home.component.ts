import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements OnInit{  

  private fragment!: string;

  constructor(
    private scroller:ViewportScroller,
    private route:ActivatedRoute,
    private router:Router
    ) { 
      
 
    }


  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment || "";
      this.router.navigate(["/"])
      this.scroller.scrollToAnchor(`${this.fragment}`);


    });
  }

  ngAfterViewInit(): void {

  }


  

}
