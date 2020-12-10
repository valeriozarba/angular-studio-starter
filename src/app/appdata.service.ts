import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  contactInfo = [
    {
      email: 'test@email.it',
      telefono: '333123456',
      indirizzo: 'Via Roma 21',
      nomeAzienda: 'Prova Azienda'
    },
  ];

  contentText = [
    {
      unique: 'azienda',//corrisponde con l'uri della pagina
      titolo: 'Azienda',
      description: 'Contenuto della pagina',
      fileOnline: 'URL-LINK',
      isHtml: false
    },
    {
      unique: 'prodotti',//corrisponde con l'uri della pagina
      titolo: 'Prodotti',
      description: 'Contenuto della pagina',
      fileOnline: 'URL-LINK',
      isHtml: false
    },
    {
      unique: 'galleria',//corrisponde con l'uri della pagina
      titolo: 'Galleria',
      description: 'Contenuto della pagina',
      fileOnline: 'URL-LINK',
      isHtml: false
    },
  ];

  constructor() { }

  getContactInfo(): any{
    return this.contactInfo;
  }


  getDataContent(itemid:string): any{
    return this.contentText.filter(item=>(item.unique==itemid))[0];
  }

}
