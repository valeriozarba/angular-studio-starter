import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss']
})
export class WidgetPageComponent implements OnInit {

  @Input() titolo: string;
  @Input() dataName: string;


  constructor() { }

  ngOnInit(): void {
  }

}
