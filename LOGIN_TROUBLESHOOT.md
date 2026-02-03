# Checklist Login Issue

## 1. Cek Backend Server Status
- [ ] Apakah Laravel server sudah running di `http://localhost:8000`?
- [ ] Terminal harus menampilkan: `INFO  Server running on http://127.0.0.1:8000`

## 2. Cek Database
```bash
# Buat database baru
CREATE DATABASE absensi_local;

# Jalankan migration
php artisan migrate

# Seed data (buat user/siswa test)
php artisan db:seed
```

Setelah seeding, user yang bisa login:
- Email: `ahmad.fauzi@eskul.test` atau `siti.nurhaliza@eskul.test` dll
- Password: `password`

## 3. Cek Koneksi Frontend ke Backend

Buka browser DevTools (F12):
- Tab **Network**: saat login, cek apakah ada request ke `http://localhost:8000/api/login`
- Tab **Console**: lihat apakah ada CORS error atau fetch error
- Tab **Application > Local Storage**: cek apakah `auth_token` tersimpan setelah login sukses

## 4. Test API Langsung
```bash
# Test login endpoint
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ahmad.fauzi@eskul.test","password":"password"}'
```

Harus return:
```json
{
  "success": true,
  "data": {
    "token": "...",
    "user": {...},
    "student": {...}
  }
}
```

## 5. Check .env File

Backend (.env):
```
APP_ENV=local
APP_DEBUG=true
DB_DATABASE=absensi_local
DB_USERNAME=root
DB_PASSWORD=
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

Frontend (.env.local):
```
VITE_API_URL=http://localhost:8000
```

## 6. Common Issues

### CORS Error
- Pastikan middleware CORS sudah di `bootstrap/app.php`
- Pastikan `CORS_ALLOWED_ORIGINS` benar

### 404 Not Found
- Cek apakah `php artisan serve` sedang berjalan
- Pastikan tidak ada typo di API endpoint

### Validation Error
- Email harus exist di database (jalankan seeder)
- Password di database di-hash dengan bcrypt

---

Apa error yang kamu lihat di Console (F12)?
