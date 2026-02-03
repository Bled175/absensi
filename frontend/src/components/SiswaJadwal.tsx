import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const jadwalData = [
  {
    hari: "Senin",
    kegiatan: [
      {
        nama: "Basket",
        waktu: "15:00 - 17:00",
        pembina: "Pak Agus Supriadi",
        lokasi: "Lapangan Basket",
        status: "enrolled",
      },
      {
        nama: "Robotik",
        waktu: "14:00 - 16:00",
        pembina: "Pak Gilang Pratama",
        lokasi: "Lab Komputer",
        status: "enrolled",
      },
    ],
  },
  {
    hari: "Selasa",
    kegiatan: [
      {
        nama: "Futsal",
        waktu: "15:00 - 17:00",
        pembina: "Pak Eko Wahyudi",
        lokasi: "Lapangan Futsal",
        status: "available",
      },
    ],
  },
  {
    hari: "Rabu",
    kegiatan: [
      {
        nama: "Basket",
        waktu: "15:00 - 17:00",
        pembina: "Pak Agus Supriadi",
        lokasi: "Lapangan Basket",
        status: "enrolled",
      },
      {
        nama: "PMR",
        waktu: "14:00 - 16:00",
        pembina: "Bu Dewi Kusuma",
        lokasi: "Ruang PMR",
        status: "enrolled",
      },
      {
        nama: "Robotik",
        waktu: "14:00 - 16:00",
        pembina: "Pak Gilang Pratama",
        lokasi: "Lab Komputer",
        status: "enrolled",
      },
    ],
  },
  {
    hari: "Kamis",
    kegiatan: [
      {
        nama: "Tari Tradisional",
        waktu: "14:00 - 16:00",
        pembina: "Bu Fitri Rahayu",
        lokasi: "Aula",
        status: "available",
      },
    ],
  },
  {
    hari: "Jumat",
    kegiatan: [
      {
        nama: "Teater",
        waktu: "14:00 - 17:00",
        pembina: "Bu Hana Kartika",
        lokasi: "Gedung Kesenian",
        status: "available",
      },
    ],
  },
  {
    hari: "Sabtu",
    kegiatan: [
      {
        nama: "Pramuka",
        waktu: "08:00 - 12:00",
        pembina: "Pak Budi Hartono",
        lokasi: "Lapangan Upacara",
        status: "available",
      },
    ],
  },
];

export function SiswaJadwal() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-gray-900">Jadwal Ekstrakurikuler</h2>
        <p className="text-gray-600">Lihat jadwal kegiatan mingguan</p>
      </div>

      {/* Legend */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span className="text-sm text-gray-700">Eskul yang Anda ikuti</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border-2 border-gray-300 rounded"></div>
              <span className="text-sm text-gray-700">Eskul lainnya</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 gap-6">
        {jadwalData.map((day) => (
          <Card key={day.hari} className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Calendar className="w-5 h-5 text-blue-600" />
                {day.hari}
              </CardTitle>
              <p className="text-sm text-gray-500">
                {day.kegiatan.length} kegiatan tersedia
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {day.kegiatan.map((kegiatan, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      kegiatan.status === "enrolled"
                        ? "bg-blue-50 border-blue-600 shadow-sm"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-gray-900">{kegiatan.nama}</h4>
                      {kegiatan.status === "enrolled" && (
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                          Terdaftar
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{kegiatan.waktu}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{kegiatan.pembina}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{kegiatan.lokasi}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Card */}
      <Card className="border-blue-200 bg-blue-50 shadow-sm">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-sm text-blue-900 mb-1">Informasi Penting</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Harap datang 10 menit sebelum kegiatan dimulai</li>
                <li>• Bawa perlengkapan sesuai kegiatan yang diikuti</li>
                <li>• Jika berhalangan hadir, hubungi pembina maksimal H-1</li>
                <li>• Absensi ditutup 15 menit setelah kegiatan dimulai</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
