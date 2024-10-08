// Import Firebase methods
import { database, ref, set, push, remove, onValue, update } from 'https://xuanvinh223.github.io/TheHub/module/firebase.js';

// Hàm thực hiện các thao tác CRUD với Firebase
function firebaseCRUD(action, dataPath, data = null) {
    const dbRef = ref(database, dataPath);

    return new Promise((resolve, reject) => {
        switch (action) {
            case 'create':
                // Thêm dữ liệu mới vào Firebase (với id tự động)
                const newRef = push(dbRef);
                set(newRef, data)
                    .then(() => resolve({ success: true, key: newRef.key }))
                    .catch(error => reject(error));
                break;

            case 'read':
                // Đọc dữ liệu từ Firebase
                onValue(dbRef, (snapshot) => {
                    const data = snapshot.val();
                    resolve(data);
                }, (error) => reject(error));
                break;

            case 'update':
                // Cập nhật dữ liệu tại vị trí cụ thể
                update(dbRef, data)
                    .then(() => resolve({ success: true }))
                    .catch(error => reject(error));
                break;

            case 'delete':
                // Xóa dữ liệu tại vị trí cụ thể
                remove(dbRef)
                    .then(() => resolve({ success: true }))
                    .catch(error => reject(error));
                break;

            default:
                reject(new Error("Action không hợp lệ!"));
        }
    });
}

export { firebaseCRUD };