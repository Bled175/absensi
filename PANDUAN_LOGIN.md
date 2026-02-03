# ✅ PANDUAN LENGKAP LOGIN LOKAL

## Step 1: Pastikan Backend sudah setup

```bash
cd TugasCloudComputing

# Install dependencies
composer install

# Generate APP_KEY (jika belum punya)
php artisan key:generate

# Jalankan migrations (membuat table)
php artisan migrate

# Seed database dengan user test
php artisan db:seed
```

**Catatan:** Jika error "Duplicate entry", itu berarti data sudah ada, lanjut ke step berikutnya.

## Step 2: Jalankan Laravel Backend

```bash
php artisan serve
```

Output seharusnya:
```
INFO  Server running on http://127.0.0.1:8000
```

## Step 3: Di Terminal Lain, Jalankan Frontend

```bash
cd frontend

# Install dependencies (jika belum)
npm install

# Run development server
npm run dev
```

Output seharusnya:
```
VITE v5.x.x  ready in 500 ms

➜  Local:   http://localhost:5173/
```

## Step 4: Login dengan Test Account

Buka browser ke: **http://localhost:5173**

Gunakan salah satu dari account berikut:
```
Email: ahmad.fauzi@eskul.test
Email: siti.nurhaliza@eskul.test
Email: budi.santoso@eskul.test
Email: dewi.lestari@eskul.test
Email: eko.prasetyo@eskul.test

Password: password
```

## Step 5: Verify Login Berhasil

Buka Developer Tools (F12):

### Tab Console:
- Tidak boleh ada error merah
- Cek apakah ada error CORS atau fetch

### Tab Network:
- Klik login
- Cari request ke `localhost:8000/api/login`
- Response harus status **200** dengan `token` di dalamnya

### Tab Application > Local Storage:
- Setelah login, harus ada key `auth_token` dengan value token JWT

## Troubleshooting

### ❌ CORS Error
```
Access to XMLHttpRequest at 'http://localhost:8000/api/login' from origin 
'http://localhost:5173' has been blocked by CORS policy
```

**Solusi:**
- Cek `.env` di backend:
  ```
  CORS_ALLOWED_ORIGINS=http://localhost:5173
  ```
- Pastikan middleware CorsMiddleware sudah di `bootstrap/app.php`
- Restart Laravel server

### ❌ 404 Not Found
**Solusi:**
- Pastikan Laravel server sedang berjalan
- Pastikan URL di `.env.local` frontend benar: `VITE_API_URL=http://localhost:8000`

### ❌ Invalid Credentials
**Solusi:**
- Pastikan sudah jalankan `php artisan db:seed`
- Gunakan email yang benar dari list di atas
- Password: `password` (huruf kecil semua)

### ❌ Database Error
```
SQLSTATE[HY000]: General error: 1030 Got an error from storage engine
```

**Solusi:**
- Pastikan MySQL server running (check Laragon)
- Database `absensi` sudah dibuat
- Jalankan: `php artisan migrate:refresh --seed`

---

**Jika masih tidak bisa:**
1. Buka DevTools (F12) tab Console
2. Copy semua error message
3. Share error tersebut untuk debugging lebih lanjut
