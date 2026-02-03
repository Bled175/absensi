# Panduan Menjalankan Frontend & Backend Lokal

## Prerequisite
- PHP 8.2+
- Node.js 18+
- MySQL/MariaDB

## Setup Backend (Laravel)

### 1. Masuk ke folder backend
```bash
cd TugasCloudComputing
```

### 2. Install dependencies
```bash
composer install
```

### 3. Generate APP_KEY (jika belum ada di .env)
```bash
php artisan key:generate
```

### 4. Setup database
```bash
# Buat database di MySQL
# CREATE DATABASE absensi_local;

# Jalankan migration
php artisan migrate

# (Optional) Seed database dengan data dummy
php artisan db:seed
```

### 5. Jalankan server Laravel
```bash
php artisan serve
```
Server akan berjalan di: **http://localhost:8000**

---

## Setup Frontend (React/Vite)

### 1. Masuk ke folder frontend
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan development server
```bash
npm run dev
```
Server akan berjalan di: **http://localhost:5173**

---

## Konfigurasi Environment

### Backend (.env)
```
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=absensi_local
DB_USERNAME=root
DB_PASSWORD=

CORS_ALLOWED_ORIGINS=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

---

## Testing Connection

1. Buka browser ke: http://localhost:5173
2. Coba login dengan credentials dari database
3. Buka Developer Tools (F12) -> Network tab untuk melihat API calls
4. Pastikan tidak ada CORS errors di Console

---

## Troubleshooting

### CORS Error
- Pastikan `CORS_ALLOWED_ORIGINS` di backend .env sudah benar
- Pastikan middleware CORS sudah ditambahkan di bootstrap/app.php

### 404 Not Found
- Pastikan backend server sudah berjalan (php artisan serve)
- Pastikan URL API di frontend (.env) sudah benar

### Token Error
- Clear localStorage di browser (DevTools -> Application -> Local Storage)
- Login ulang

### Database Error
- Pastikan MySQL sudah running
- Cek credentials di .env
- Jalankan: `php artisan migrate`
