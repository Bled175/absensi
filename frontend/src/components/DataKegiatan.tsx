import { useState } from "react";
import { Search, Plus, Edit, Trash2, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { AddKegiatanModal } from "./AddKegiatanModal";

const kegiatanData = [
  {
    id: 1,
    nama: "Basket",
    pembina: "Pak Agus Supriadi",
    jadwal: "Senin & Rabu, 15:00-17:00",
    jumlahAnggota: 28,
  },
  {
    id: 2,
    nama: "Paduan Suara",
    pembina: "Bu Siti Aminah",
    jadwal: "Selasa & Kamis, 14:00-16:00",
    jumlahAnggota: 35,
  },
  {
    id: 3,
    nama: "PMR (Palang Merah Remaja)",
    pembina: "Bu Dewi Kusuma",
    jadwal: "Rabu, 14:00-16:00",
    jumlahAnggota: 22,
  },
  {
    id: 4,
    nama: "Pramuka",
    pembina: "Pak Budi Hartono",
    jadwal: "Sabtu, 08:00-12:00",
    jumlahAnggota: 45,
  },
  {
    id: 5,
    nama: "Futsal",
    pembina: "Pak Eko Wahyudi",
    jadwal: "Selasa & Jumat, 15:00-17:00",
    jumlahAnggota: 32,
  },
  {
    id: 6,
    nama: "Tari Tradisional",
    pembina: "Bu Fitri Rahayu",
    jadwal: "Kamis, 14:00-16:00",
    jumlahAnggota: 18,
  },
  {
    id: 7,
    nama: "Robotik",
    pembina: "Pak Gilang Pratama",
    jadwal: "Senin & Rabu, 14:00-16:00",
    jumlahAnggota: 15,
  },
  {
    id: 8,
    nama: "Teater",
    pembina: "Bu Hana Kartika",
    jadwal: "Jumat, 14:00-17:00",
    jumlahAnggota: 20,
  },
];

export function DataKegiatan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredKegiatan = kegiatanData.filter((kegiatan) =>
    kegiatan.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kegiatan.pembina.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Data Kegiatan Ekstrakurikuler</h2>
          <p className="text-gray-600">Kelola kegiatan dan jadwal ekstrakurikuler</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Kegiatan
        </Button>
      </div>

      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Cari nama kegiatan atau pembina..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Nama Eskul</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Pembina</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Jadwal</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Jumlah Anggota</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredKegiatan.map((kegiatan) => (
                  <tr
                    key={kegiatan.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900">{kegiatan.nama}</td>
                    <td className="py-3 px-4 text-gray-600">{kegiatan.pembina}</td>
                    <td className="py-3 px-4 text-gray-600">{kegiatan.jadwal}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{kegiatan.jumlahAnggota} siswa</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredKegiatan.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada data kegiatan yang ditemukan</p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredKegiatan.length} dari {kegiatanData.length} kegiatan
            </p>
          </div>
        </CardContent>
      </Card>

      <AddKegiatanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
