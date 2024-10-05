import { database, ref, set, push, remove, onValue } from 'https://xuanvinh223.github.io/TheHub/module/firebase.js';

const app = angular.module('myApp', []);

app.controller("myController",myController)
function myController() {
    console.log(database);
}