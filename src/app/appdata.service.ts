import { Injectable } from '@angular/core';
import { BlockContent } from './models/block-content';
import { MenuItem } from './models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  menuList:MenuItem[];

  contactInfo:string;

  contentText:BlockContent[]=[
    {
      unique: 'azienda',
      titolo: 'Azienda',
      description: '<p>Contenuto della pagina azienda</p>',
      isPage: true,
      showGallery:false
    },
    {
      unique: 'prodotti',
      titolo: 'Prodotti',
      description: 'Pagina prodotto',
      fileOnline: 'URL-LINK',
      isPage: true,
      showGallery:false
    },
    {
      unique: 'galleria',//corrisponde con l'uri della pagina
      titolo: 'Galleria',
      description: 'Pagina galleria',
      fileOnline: 'URL-LINK',
      isPage: true,//definisce il rendere completo di una pagina
      showGallery:true
    },
    {
      unique: 'footer-box-1',//corrisponde con l'uri della pagina
      titolo: 'Chi siamo',
      description: '<ul><li><a routerLink=\"\">Link 1</li></ul>',
      fileOnline: 'URL-LINK',
      isPage: false,//a false si tratta di un blocco
      showGallery:false
    },
    {
      unique: 'footer-box-2',//corrisponde con l'uri della pagina
      titolo: 'Contatti',
      description: 'Pagina galleria',
      fileOnline: '<ul><li>Link 1</li></ul>',
      isPage: false,//a false si tratta di un blocco
      showGallery:false
    },
    {
      unique: 'footer-box-3',//corrisponde con l'uri della pagina
      titolo: 'Sitemap',
      description: '<ul><li>Link 1</li></ul>',
      fileOnline: 'URL-LINK',
      isPage: false,//a false si tratta di un blocco
      showGallery:false
    }
  ];

  constructor() {}

  getContactInfo(): any{
    return this.contactInfo;
  }

  addMenuItem(menu:MenuItem): void{
    this.menuList.push(menu);
  }


  getDataContent(itemid:string): any{
    return this.contentText.filter(item=>(item.unique==itemid))[0];
  }

}
