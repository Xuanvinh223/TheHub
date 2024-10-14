import { database, ref, set, push, remove, onValue } from 'https://xuanvinh223.github.io/TheHub/module/firebase.js';


function indexController($scope, translateService) {

    $scope.lang = 'en'; // Ngôn ngữ mặc định
    $scope.translations = {}; // Khởi tạo đối tượng rỗng cho bản dịch

    // Hàm thay đổi ngôn ngữ
    $scope.changeLanguage = function(lang) {
        translateService.getTranslation(lang).then(function(data) {
            $scope.translations = data;  // Lưu bản dịch vào $scope
        });
    };

    // Tải ngôn ngữ mặc định khi trang load
    $scope.changeLanguage($scope.lang);

}

export { indexController }
