const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Đường dẫn đến file users.json
const usersFilePath = path.join(__dirname, 'users.json');

// Cấu hình middleware
app.use(cors()); // Cho phép gọi API từ frontend
app.use(express.json()); // Xử lý JSON trong body của request

// Kiểm tra sự tồn tại của file users.json
const checkFilesExist = async () => {
  try {
    await fs.access(usersFilePath);
  } catch (error) {
    console.error('Lỗi: File không tồn tại hoặc không thể truy cập:', error);
    process.exit(1);
  }
};

// Gọi hàm kiểm tra file
checkFilesExist();

// API: Lấy danh sách users
app.get('/api/users', async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    console.error('Lỗi đọc file users:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});