# K-PIK API Documentation

Tài liệu này mô tả các RESTful API được cung cấp bởi K-PIK Server (Backend). 

**Base URL:** `http://localhost:3000/api`

---

## 1. Download Video/Image từ Mạng Xã Hội

API chính được sử dụng để lấy dữ liệu tải về từ một liên kết (URL) của video/ảnh (hiện tại hỗ trợ TikTok).

**Endpoint:** `/download`
**Phương thức:** `POST`

### Request Body

- `url` (chuỗi, **bắt buộc**): Đường dẫn video/hình ảnh. Hỗ trợ các định dạng từ TikTok (`www.tiktok.com`, `vt.tiktok.com`, `m.tiktok.com`).

**Ví dụ Request:**

```json
{
  "url": "https://vt.tiktok.com/ZSY1XXXXX/"
}
```

### Các Logic Xử lý & Middlewares:

1. **`detectPlatformMiddleware`**: Tự động nhận diện mạng xã hội từ URL (trả về lỗi 400 nếu mạng xã hội không hỗ trợ hoặc link không hợp lệ).
2. **`validateByPlatform`**: Kiểm tra tính toàn vẹn của URL theo từng nền tảng (Ví dụ: TikTok URL bắt buộc phải đúng chuẩn).
3. **`Rate Limiting`**: Tối đa 30 requests / 1 phút (tại `/api`).

---

### Response 

API trả về chuẩn JSON. Có hai định dạng trả về dựa vào nội dung liên kết (Video hoặc Hình ảnh/Slideshow).

#### Trạng thái Thành Công (Dạng Video)

```json
{
  "success": true,
  "data": {
    "type": "video",
    "video": "https://v16m.tiktokcdn... (URL MP4 video không logo)",
    "music": "https://v19-ies-music.tiktokcdn... (URL Audio MP3)",
    "author": "tiktok_username",
    "title": "Nội dung/Mô tả video",
    "cover": "https://p16-common... (URL ảnh bìa video)",
    "duration": 15
  }
}
```

#### Trạng thái Thành Công (Dạng Hình ảnh / Slideshow)

```json
{
  "success": true,
  "data": {
    "type": "image",
    "images": [
      "https://p16-common... (URL ảnh 1)",
      "https://p16-common... (URL ảnh 2)"
    ],
    "music": "https://v19-ies-music.tiktokcdn... (URL Audio MP3 nhạc nền)",
    "author": "tiktok_username",
    "title": "Nội dung/Mô tả bài đăng",
    "cover": "https://p16-common... (URL ảnh bìa/ảnh đầu tiên)",
    "duration": 0
  }
}
```

#### Trạng thái Lỗi (4xx / 500)

1. Lỗi thiếu tham số truyền vào:
```json
{
  "error": "Missing URL"
}
```

2. Lỗi nền tảng không hỗ trợ:
```json
{
  "success": false,
  "message": "Unsupported platform"
}
```

3. Lỗi URL không hợp lệ (ví dụ đối với TikTok):
```json
{
  "success": false,
  "message": "Invalid TikTok URL"
}
```

4. Lỗi server trong quá trình phân tích/tải về:
```json
{
  "success": false,
  "message": "Download failed"
}
```
