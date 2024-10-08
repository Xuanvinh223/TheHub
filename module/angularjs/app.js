import { indexController } from "./controller/index.js";
import { ListController } from "./controller/list.js";

const app = angular.module('myApp', ['ngRoute','angularUtils.directives.dirPagination']);

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
        .when('/list', {
            templateUrl: 'partials/list.html'
        })
        .when('/add', {
            templateUrl: 'partials/add.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("indexController", indexController);
app.controller("listController", ListController);
