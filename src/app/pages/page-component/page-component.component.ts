import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppdataService } from 'src/app/appdata.service';

@Component({
  selector: 'app-page-compoenent',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss']
})
export class PageComponentComponent implements OnInit {
  titolo:string;
  

  constructor(public pageService:AppdataService,public router: Router) {
    this.titolo="TITOLO";
    

  }

  ngOnInit(): void {
    let urlflag=this.router.url.replace("/",'');
    let info=this.pageService.getDataContent(urlflag);
    if(info!=undefined){
      this.titolo=info.titolo;
      console.log("Carico info pagina",info);
    }else{
      console.error("Non è stato trovato il contenuto della pagina:(Controlla la presenza della pagina su appData.service)");
    }
  }

}
