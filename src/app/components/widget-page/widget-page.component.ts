import { Component, Input, OnInit } from '@angular/core';
import { AppdataService } from 'src/app/appdata.service';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss']
})
export class WidgetPageComponent implements OnInit {

  @Input() idname:string;
  @Input() dataName: string;
  @Input() groupref:string;

  isCollapsed:boolean=true;
  contentData:string;
  titolo:string;
  
  constructor(public pageService:AppdataService) { }

  ngOnInit(): void {
    let info=this.pageService.getDataContent(this.dataName);
    if(info!=undefined){
      this.titolo=info.titolo;
      this.contentData=info.description;
    }else{
      console.error("Non è stato trovato il contenuto della pagina:(Controlla la presenza della pagina su appData.service)");
    }
  }

  getClassCollapse(){
    return "widget-titolo "+((this.isCollapsed)?"":"open");
  }

}
