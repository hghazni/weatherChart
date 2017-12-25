# WeatherChart

This is an Angular 5 project using Chart.js to display a chart from the Weather API. The goal of this project is to get more familiar with all three and to try out some of the changes in Angular 5.

### Enable Cross Origin Resources
One annoyance I discovered during this process is the 'allowance of cross origin resources'. So Chrome disallows the communication of two local hosts (API on one and the portal on the other) which then disallows this whole build to work. To counter that I downloaded 'CORS' or on the chrome app store known as 'Allow-Control-Allow-Origin'.

https://goo.gl/HSy2yJ

It then allows me to communicate between local hosts and not require me to run a web server. Of course all of this will not matter once you deploy it live to a web server somewhere.


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
