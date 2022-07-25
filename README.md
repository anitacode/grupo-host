<p align="center"><a href="https://grupo.host" target="_blank"><img src="https://grupo.host/img/logo-host.svg" width="400"></a></p>

## About Grupo Host

Is a web application that provides users the oportunity of having web services for their own. We use Laravel for the backend and react for the front end.

# Deployment Locally

Run 
`composer install`
It will install all the dependencies in order to make the backend run.
On production enviroment we use
`composer install --no-dev`

Run
`yarn install`
It will install all the dependencies in order to make the frontend run.

To deploy backend run

`php artisan serve`

To enable the live reloading, just run 

`npm run watch`

# Testing
Grupo Host app use testing-library for the front-end and laravel testing for the backend.

# Enviroments
Grupo Host app has a local, QA and production enviroment.

# Continuos Integration
Our repo uses circleCI, everytime a PR is open, all the checkings should pass before being able to merge with the master branch. 

When a release is made with the format `/^rc([0-9]+\.){2}[0-9]+$/` rc0.0.0, it goes to qa only. # still pending to configure.

When a release is made with the format `/^v([0-9]+\.){2}[0-9]+$/` v0.0.0, it goes to production only.