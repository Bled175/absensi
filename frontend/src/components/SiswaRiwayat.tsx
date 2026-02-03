import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const riwayatData = [
  { id: 1, eskul: "Basket", tanggal: "2025-03-20", status: "Hadir", waktu: "14:30", keterangan: "-" },
  { id: 2, eskul: "Robotik", tanggal: "2025-03-19", status: "Hadir", waktu: "14:15", keterangan: "-" },
  { id: 3, eskul: "Basket", tanggal: "2025-03-18", status: "Hadir", waktu: "14:28", keterangan: "-" },
  { id: 4, eskul: "PMR", tanggal: "2025-03-18", status: "Hadir", waktu: "14:20", keterangan: "-" },
  { id: 5, eskul: "Robotik", tanggal: "2025-03-17", status: "Izin", waktu: "-", keterangan: "Sakit" },
  { id: 6, eskul: "Basket", tanggal: "2025-03-13", status: "Hadir", waktu: "14:32", keterangan: "-" },
  { id: 7, eskul: "PMR", tanggal: "2025-03-13", status: "Hadir", waktu: "14:18", keterangan: "-" },
  { id: 8, eskul: "Robotik", tanggal: "2025-03-12", status: "Hadir", waktu: "14:25", keterangan: "-" },
  { id: 9, eskul: "Basket", tanggal: "2025-03-11", status: "Hadir", waktu: "14:30", keterangan: "-" },
  { id: 10, eskul: "PMR", tanggal: "2025-03-06", status: "Hadir", waktu: "14:22", keterangan: "-" },
];

export function SiswaRiwayat() {
  const [filterEskul, setFilterEskul] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [startDate, setStartDate] = useState("2025-03-01");
  const [endDate, setEndDate] = useState("2025-03-31");

  const filteredData = riwayatData.filter((item) => {
    const matchesEskul = filterEskul === "all" || item.eskul === filterEskul;
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    return matchesEskul && matchesStatus;
  });

  const totalHadir = riwayatData.filter((r) => r.status === "Hadir").length;
  const totalIzin = riwayatData.filter((r) => r.status === "Izin").length;
  const totalAlpha = riwayatData.filter((r) => r.status === "Alpha").length;
  const persentaseKehadiran = Math.round((totalHadir / riwayatData.length) * 100);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-gray-900">Riwayat Absensi</h2>
        <p className="text-gray-600">Lihat semua riwayat kehadiran Anda</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 mb-1">Total Kehadiran</p>
            <h3 className="text-gray-900">{persentaseKehadiran}%</h3>
            <p className="text-xs text-gray-500">{totalHadir} dari {riwayatData.length} pertemuan</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-green-700 mb-1">Hadir</p>
            <h3 className="text-green-900">{totalHadir}</h3>
            <p className="text-xs text-green-600">Pertemuan</p>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-yellow-700 mb-1">Izin</p>
            <h3 className="text-yellow-900">{totalIzin}</h3>
            <p className="text-xs text-yellow-600">Pertemuan</p>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-red-700 mb-1">Alpha</p>
            <h3 className="text-red-900">{totalAlpha}</h3>
            <p className="text-xs text-red-600">Pertemuan</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Table */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Detail Riwayat</CardTitle>
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
              <label className="text-sm text-gray-600">Filter Eskul</label>
              <Select value={filterEskul} onValueChange={setFilterEskul}>
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Semua Eskul" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Eskul</SelectItem>
                  <SelectItem value="Basket">Basket</SelectItem>
                  <SelectItem value="PMR">PMR</SelectItem>
                  <SelectItem value="Robotik">Robotik</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Filter Status</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Semua Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="Hadir">Hadir</SelectItem>
                  <SelectItem value="Izin">Izin</SelectItem>
                  <SelectItem value="Alpha">Alpha</SelectItem>
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
                  <th className="text-left py-3 px-4 text-sm text-gray-600">No</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Eskul</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Waktu</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-900">{item.eskul}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
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
                    <td className="py-3 px-4 text-gray-500 text-sm">{item.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada data riwayat</p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredData.length} dari {riwayatData.length} data
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
