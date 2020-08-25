# IntegrationAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7 to showcase the integration of the games provided by  [GameOlive / Lucky Beetle Games](https://luckybeetlegames.com/) platform. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Integration
For demonstration, all the requests are served from Beta Platform "beta-elantra-api.gameolive.com" and following credentials are used in this demo. 
```
const client_id = 'integration_angular-643a3d93-4b7a-4aac-831c-7096bd4854e0@99f93a5a-d0f4-4519-8f60-fd7115ce009c.gol';
const client_secret = 'abc1598340979224';
const operator_id = '5f43740d2c1c89000a05358b';
```

For trying out, local development, integration etc this will definitely work.

Before, rolling out to production with scalability and retention please contact the team : studio@gameolive.com and we will happy to assist you for production setup, while labelling and whitelisting domains and IP's.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
