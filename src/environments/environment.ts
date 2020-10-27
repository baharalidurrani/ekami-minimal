// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    uriHTTP: `http://${window.location.hostname}`,
    uriWSS: `ws://${window.location.hostname}`,
    port: 4000,
    graphqlEndpoint: `/graphql/ql`,
    graphqlSubscription: `/graphql`,
    authEndpoint: `/oauth/token`,
    headers: {
      client_id: 'server',
      client_secret: 'serverSecret',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
