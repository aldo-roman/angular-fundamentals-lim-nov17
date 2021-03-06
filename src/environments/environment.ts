// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API: 'https://api.github.com/users/',
  firebase: {
    apiKey: "AIzaSyAuqH0ZqQiKRs39htmaXgZQckJwYVnjaqA",
    authDomain: "exquisite-corpse-2.firebaseapp.com",
    databaseURL: "https://exquisite-corpse-2.firebaseio.com",
    projectId: "exquisite-corpse-2",
    storageBucket: "exquisite-corpse-2.appspot.com",
    messagingSenderId: "602579488507"
  }
};
