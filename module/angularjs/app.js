import { indexController } from "./controller/index.js";

const app = angular.module('myApp', []);

app.controller("indexController",indexController);
