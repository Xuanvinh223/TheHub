import { database, ref, set, push, remove, onValue } from 'https://xuanvinh223.github.io/TheHub/module/firebase.js';


function indexController($scope) {
    $scope.message = "Hello world!";
    console.log(database); // Giả sử biến `database` có sẵn trong môi trường
}

export {indexController}
