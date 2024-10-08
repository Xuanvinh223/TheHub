import { firebaseCRUD } from '../firebaseCRUD.js';

function ListController($scope) {
    // Danh sách từ vựng mặc định
    $scope.vocabularyList = [];

    // Biến để lưu trữ từ vựng mới
    $scope.newVocabulary = {};

    // Biến trạng thái loading
    $scope.isLoading = false;

    // Hàm lấy dữ liệu từ Firebase
    function fetchDataFromFirebase() {
        firebaseCRUD('read', 'vocabulary')
            .then((data) => {
                if (data) {
                    // Lấy key và gán vào danh sách từ vựng
                    $scope.vocabularyList = Object.keys(data).map(key => ({
                        key: key, // Thêm key để xóa
                        word: data[key].word,
                        meaning: data[key].meaning
                    }));
                    $scope.$apply(); // Cập nhật giao diện
                }
            })
            .catch((error) => {
                console.error("Error fetching vocabulary: ", error);
            });
    }

    // Hàm thêm từ vựng mới vào Firebase
    $scope.addVocabulary = function () {
        const newVocabulary = {
            word: $scope.newVocabulary.word,
            meaning: $scope.newVocabulary.meaning
        };

        firebaseCRUD('create', 'vocabulary', newVocabulary)
            .then(() => {
                // Xóa giá trị trong form sau khi thêm
                $scope.newVocabulary = {};
                fetchDataFromFirebase(); // Cập nhật lại danh sách từ vựng
                $scope.$apply(); // Cập nhật giao diện
            })
            .catch((error) => {
                console.error("Error adding new vocabulary: ", error);
            })
            .finally(() => {
                $scope.isLoading = false; // Kết thúc loading
                $scope.$apply(); // Cập nhật giao diện
            });
    };

    // Hàm xóa từ vựng
    $scope.deleteVocabulary = function (key) {

        firebaseCRUD('delete', `vocabulary/${key}`)
            .then(() => {
                fetchDataFromFirebase(); // Cập nhật lại danh sách sau khi xóa
            })
            .catch((error) => {
                console.error("Error deleting vocabulary: ", error);
            })
            .finally(() => {
                $scope.isLoading = false; // Kết thúc loading
                $scope.$apply(); // Cập nhật giao diện
            });
    };

    // Lấy dữ liệu từ Firebase khi ứng dụng khởi động
    fetchDataFromFirebase();
}


export { ListController }
