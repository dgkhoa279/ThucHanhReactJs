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
app.use(cors());
app.use(express.json());

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

// API: Cập nhật user theo id
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    // Đọc dữ liệu hiện tại
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Cập nhật user theo id (dựa trên index trong mảng)
    jsonData.users[id] = {
      ...jsonData.users[id],
      customerName: updatedUser.customerName,
      company: updatedUser.company,
      orderValue: updatedUser.orderValue,
      orderDate: updatedUser.orderDate,
      status: updatedUser.status,
    };

    // Ghi lại file
    await fs.writeFile(usersFilePath, JSON.stringify(jsonData, null, 2));

    res.json({ message: 'Cập nhật thành công' });
  } catch (error) {
    console.error('Lỗi cập nhật user:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// API: Thêm user mới
app.post('/api/users', async (req, res) => {
  try {
    const newUser = req.body;

    // Đọc dữ liệu hiện tại
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Thêm user mới vào mảng
    jsonData.users.push({
      customerName: newUser.customerName,
      company: newUser.company,
      orderValue: newUser.orderValue,
      orderDate: newUser.orderDate,
      status: newUser.status,
    });

    // Ghi lại file
    await fs.writeFile(usersFilePath, JSON.stringify(jsonData, null, 2));

    // Trả về user vừa thêm
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Lỗi thêm user:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});