import { firebaseCRUD } from '../firebaseCRUD.js';

function ListController($scope) {
    // Danh sách từ vựng mặc định
    $scope.vocabularyList = [];

    // Biến trạng thái loading
    $scope.isLoading = false;

    $scope.currentVocabulary = {};

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
                } else {
                    $scope.vocabularyList = [];
                }
                $scope.$apply(); // Cập nhật giao diện
            })
            .catch((error) => {
                console.error("Error fetching vocabulary: ", error);
            });
    }

    // Hàm thêm từ vựng mới vào Firebase
    $scope.addVocabulary = function () {
        const currentVocabulary = {
            word: $scope.currentVocabulary.word,
            meaning: $scope.currentVocabulary.meaning
        };

        firebaseCRUD('create', 'vocabulary', currentVocabulary)
            .then(() => {
                // Xóa giá trị trong form sau khi thêm
                $scope.currentVocabulary = {};
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
            });
    };

    // Hàm submit cho form
    $scope.submitVocabulary = function () {
        if ($scope.selectedVocabulary) {
            // Cập nhật từ vựng nếu có từ vựng đã chọn
            $scope.updateVocabulary($scope.selectedVocabulary.key);
        } else {
            // Thêm từ vựng mới
            $scope.addVocabulary();
        }
    };

    // Hàm chọn từ vựng cho việc cập nhật
    $scope.selectVocabulary = function (vocab) {

        $scope.selectedVocabulary = {
            key: vocab.key,
            word: vocab.word,
            meaning: vocab.meaning
        };

        $scope.currentVocabulary = {
            key: vocab.key,
            word: vocab.word,
            meaning: vocab.meaning
        };
    };

    // Hàm cập nhật từ vựng
    $scope.updateVocabulary = function (key) {



        const updatedVocabulary = {
            word: $scope.currentVocabulary.word,
            meaning: $scope.currentVocabulary.meaning
        };

        firebaseCRUD('update', `vocabulary/${key}`, updatedVocabulary)
            .then(() => {
                fetchDataFromFirebase();
                $scope.selectedVocabulary = null; // Đặt lại biến
                $scope.$apply();
            })
            .catch((error) => {
                console.error("Error updating vocabulary: ", error);
            });
    };

    // Lấy dữ liệu từ Firebase khi ứng dụng khởi động
    fetchDataFromFirebase();
}

export { ListController }
