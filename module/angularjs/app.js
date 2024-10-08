import { indexController } from "./controller/index.js";

const app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
        })
        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html'
        })
        .when('/work', {
            templateUrl: 'partials/work.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("indexController", indexController);
