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
      unique: 'home-page-1',
      title: 'Contact 001',
      description: 'Contact 001 des',
      email: 'c001@email.com'
    },
  ];

  constructor() { }

  getContactInfo(): any{
    return this.contactInfo;
  }


  getDataText(): any{
    return this.contentText;
  }

}
