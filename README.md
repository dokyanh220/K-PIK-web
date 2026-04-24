# K-PIK - Fast & Simple Video Downloader

K-PIK là một ứng dụng Web giúp tải video, hình ảnh và nhạc từ nhiều nền tảng mạng xã hội khác nhau (hiện tại hỗ trợ TikTok, Instagram). Hệ thống bao gồm Frontend (ReactJS) và Backend (Node.js/Express).

## 🚀 Tính năng

- **Tải video TikTok không có logo (watermark-free)**
- **Tải ảnh từ TikTok Slideshow và Instagram**
- **Tải nhạc MP3 từ video**
- Giao diện tối giản, hiện đại (hiệu ứng Glassmorphism, Tailwind CSS)
- Tự động nhận diện thiết bị và hỗ trợ dán liên kết nhanh

## 📦 Cấu trúc dự án

Dự án được cấu trúc theo dạng Monorepo đơn giản với 2 phần chính:

- `client/`: Ứng dụng Frontend (React + Vite + Tailwind CSS v4)
- `server/`: API Backend (Express.js + Axios)
- `docs/`: Tài liệu API và các hướng dẫn khác

## 🛠️ Cài đặt & Chạy ứng dụng

### 1. Server (Backend)

Yêu cầu: Node.js (v18+)

```bash
cd server
npm install
npm run dev
```
Backend sẽ khởi chạy tại: `http://localhost:3000`

### 2. Client (Frontend)

```bash
cd client
npm install
npm run dev
```
Frontend sẽ khởi chạy tại: `http://localhost:5173`

## 📚 Tài liệu API

Xem chi tiết tài liệu API Backend tại thư mục [docs/API.md](./docs/API.md)

## 🤝 Tác giả

Made with ❤️ by Do Ky Anh
