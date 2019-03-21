# ITG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Run the APP

Once you have cloned the repo please Run`npm install` and then `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Approach taken

Implemented home page as carlist page to show list of cars, information for each car are dynamic except for price and description which are static coz didn't have price and description from api call for cars list getCars() (/api/vehicles).

But once you navigate to car details page by clicking on specific model all the information displayed as dynamic and from api call getCar() (/api/vehicle/:id).

Design has been implemented exactly as requested.

Unit test has been written to cover 100% of code coverage.

e2e test written for just the hompage title static content.
