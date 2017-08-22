// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBmPPMBUvRMAtSs58WRC7QXQ_PMMIoYbA0",
    authDomain: "epsidev-viaticos.firebaseapp.com",
    databaseURL: "https://epsidev-viaticos.firebaseio.com",
    projectId: "epsidev-viaticos",
    storageBucket: "epsidev-viaticos.appspot.com",
    messagingSenderId: "223842427525"
  }
};