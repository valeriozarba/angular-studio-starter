// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    email: 'test@email.it',
    telefono: '333123456',
    indirizzo: 'Via Roma 21',
    nomeAzienda: 'Prova Azienda',
    contacts:[
      {email:'contatto@prova.it',telefono:'+39 123456789',indirizzo:''}
    ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
