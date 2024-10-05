import { database, ref, set, push, remove, onValue } from 'TheHub/module/firebase.js';

const app = angular.module('myApp', []);

app.controller("myController",myController)
function myController() {
    console.log(database);
}