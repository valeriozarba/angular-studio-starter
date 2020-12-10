import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss']
})
export class WidgetPageComponent implements OnInit {

  @Input() idname:string;
  @Input() titolo: string;
  @Input() dataName: string;
  @Input() groupref:string;

  isCollapsed:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  getClassCollapse(){
    return "widget-titolo "+((this.isCollapsed)?"":"open");
  }

}
