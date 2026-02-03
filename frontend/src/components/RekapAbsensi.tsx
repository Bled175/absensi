import { useState } from "react";
import { Download, FileText, FileSpreadsheet, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const rekapData = [
  { id: 1, nama: "Ahmad Rizki Fauzan", tanggal: "2025-03-20", kegiatan: "Basket", status: "Hadir", waktu: "14:30" },
  { id: 2, nama: "Siti Nurhaliza", tanggal: "2025-03-20", kegiatan: "Paduan Suara", status: "Hadir", waktu: "14:28" },
  { id: 3, nama: "Budi Santoso", tanggal: "2025-03-20", kegiatan: "PMR", status: "Izin", waktu: "-" },
  { id: 4, nama: "Dewi Lestari", tanggal: "2025-03-20", kegiatan: "Pramuka", status: "Hadir", waktu: "14:25" },
  { id: 5, nama: "Eko Prasetyo", tanggal: "2025-03-19", kegiatan: "Futsal", status: "Hadir", waktu: "14:20" },
  { id: 6, nama: "Fitri Handayani", tanggal: "2025-03-19", kegiatan: "Tari Tradisional", status: "Alpha", waktu: "-" },
  { id: 7, nama: "Gilang Ramadhan", tanggal: "2025-03-19", kegiatan: "Robotik", status: "Hadir", waktu: "14:18" },
  { id: 8, nama: "Hana Kartika Sari", tanggal: "2025-03-18", kegiatan: "Basket", status: "Hadir", waktu: "14:15" },
  { id: 9, nama: "Irfan Hakim", tanggal: "2025-03-18", kegiatan: "Teater", status: "Izin", waktu: "-" },
  { id: 10, nama: "Julia Ramadhani", tanggal: "2025-03-18", kegiatan: "Pramuka", status: "Hadir", waktu: "14:10" },
];

const monthlyData = [
  { bulan: "Jan", hadir: 850, izin: 45, alpha: 25 },
  { bulan: "Feb", hadir: 920, izin: 38, alpha: 18 },
  { bulan: "Mar", hadir: 890, izin: 52, alpha: 32 },
  { bulan: "Apr", hadir: 940, izin: 35, alpha: 15 },
  { bulan: "Mei", hadir: 910, izin: 48, alpha: 28 },
  { bulan: "Jun", hadir: 880, izin: 55, alpha: 35 },
];

export function RekapAbsensi() {
  const [startDate, setStartDate] = useState("2025-03-01");
  const [endDate, setEndDate] = useState("2025-03-31");
  const [filterKelas, setFilterKelas] = useState("all");
  const [filterKegiatan, setFilterKegiatan] = useState("all");

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Rekap Absensi</h2>
          <p className="text-gray-600">Laporan dan statistik kehadiran</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm">
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Monthly Chart */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Statistik Kehadiran Bulanan</CardTitle>
          <p className="text-sm text-gray-500">Ringkasan kehadiran 6 bulan terakhir</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="bulan" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="hadir" fill="#2563EB" radius={[8, 8, 0, 0]} name="Hadir" />
              <Bar dataKey="izin" fill="#F59E0B" radius={[8, 8, 0, 0]} name="Izin" />
              <Bar dataKey="alpha" fill="#DC2626" radius={[8, 8, 0, 0]} name="Alpha" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Filters and Table */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Data Rekap Absensi</CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Tanggal Mulai</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Tanggal Akhir</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Kelas</label>
              <Select value={filterKelas} onValueChange={setFilterKelas}>
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Filter Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kelas</SelectItem>
                  <SelectItem value="X-1">X-1</SelectItem>
                  <SelectItem value="X-2">X-2</SelectItem>
                  <SelectItem value="X-3">X-3</SelectItem>
                  <SelectItem value="XI-1">XI-1</SelectItem>
                  <SelectItem value="XI-2">XI-2</SelectItem>
                  <SelectItem value="XII-1">XII-1</SelectItem>
                  <SelectItem value="XII-2">XII-2</SelectItem>
                  <SelectItem value="XII-3">XII-3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Kegiatan</label>
              <Select value={filterKegiatan} onValueChange={setFilterKegiatan}>
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Filter Kegiatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kegiatan</SelectItem>
                  <SelectItem value="basket">Basket</SelectItem>
                  <SelectItem value="paduan-suara">Paduan Suara</SelectItem>
                  <SelectItem value="pmr">PMR</SelectItem>
                  <SelectItem value="pramuka">Pramuka</SelectItem>
                  <SelectItem value="futsal">Futsal</SelectItem>
                  <SelectItem value="tari">Tari Tradisional</SelectItem>
                  <SelectItem value="robotik">Robotik</SelectItem>
                  <SelectItem value="teater">Teater</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Nama</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Kegiatan</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Waktu</th>
                </tr>
              </thead>
              <tbody>
                {rekapData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900">{item.nama}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{item.kegiatan}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                          item.status === "Hadir"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Izin"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{item.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Menampilkan {rekapData.length} data absensi
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
