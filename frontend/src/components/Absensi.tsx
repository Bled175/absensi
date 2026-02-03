import { useState } from "react";
import { QrCode, Save } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { QRScannerPanel } from "./QRScannerPanel";

const siswaData = [
  { id: 1, nama: "Ahmad Rizki Fauzan", kelas: "X-1", status: "Hadir", jamAbsen: "14:30" },
  { id: 2, nama: "Siti Nurhaliza", kelas: "XI-2", status: "Hadir", jamAbsen: "14:28" },
  { id: 3, nama: "Budi Santoso", kelas: "X-3", status: "Izin", jamAbsen: "-" },
  { id: 4, nama: "Dewi Lestari", kelas: "XII-1", status: "Hadir", jamAbsen: "14:25" },
  { id: 5, nama: "Eko Prasetyo", kelas: "XI-1", status: "Hadir", jamAbsen: "14:20" },
  { id: 6, nama: "Fitri Handayani", kelas: "X-2", status: "Alpha", jamAbsen: "-" },
  { id: 7, nama: "Gilang Ramadhan", kelas: "XII-3", status: "Hadir", jamAbsen: "14:18" },
  { id: 8, nama: "Hana Kartika Sari", kelas: "XI-2", status: "Hadir", jamAbsen: "14:15" },
  { id: 9, nama: "Irfan Hakim", kelas: "X-1", status: "Hadir", jamAbsen: "14:12" },
  { id: 10, nama: "Julia Ramadhani", kelas: "XII-2", status: "Izin", jamAbsen: "-" },
];

export function Absensi() {
  const [selectedEskul, setSelectedEskul] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [attendanceData, setAttendanceData] = useState(siswaData);

  const handleStatusChange = (id: number, newStatus: string) => {
    setAttendanceData((prev) =>
      prev.map((siswa) =>
        siswa.id === id
          ? {
              ...siswa,
              status: newStatus,
              jamAbsen: newStatus === "Hadir" ? new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) : "-",
            }
          : siswa
      )
    );
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Absensi Hari Ini</h2>
          <p className="text-gray-600">Kelola kehadiran siswa ekstrakurikuler</p>
        </div>
        <Button
          onClick={() => setShowScanner(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
        >
          <QrCode className="w-4 h-4 mr-2" />
          Scan QR
        </Button>
      </div>

      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-gray-900">Daftar Kehadiran</CardTitle>
              <p className="text-sm text-gray-500 mt-1">Pilih kegiatan dan tandai kehadiran</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-64">
                <Select value={selectedEskul} onValueChange={setSelectedEskul}>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Pilih Kegiatan Eskul" />
                  </SelectTrigger>
                  <SelectContent>
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">No</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Nama Siswa</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Kelas</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Jam Absen</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((siswa, index) => (
                  <tr
                    key={siswa.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-900">{siswa.nama}</td>
                    <td className="py-3 px-4 text-gray-600">{siswa.kelas}</td>
                    <td className="py-3 px-4">
                      <Select
                        value={siswa.status}
                        onValueChange={(value) => handleStatusChange(siswa.id, value)}
                      >
                        <SelectTrigger className="w-32 border-gray-200 rounded-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Hadir">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              Hadir
                            </span>
                          </SelectItem>
                          <SelectItem value="Izin">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                              Izin
                            </span>
                          </SelectItem>
                          <SelectItem value="Alpha">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                              Alpha
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{siswa.jamAbsen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Hadir: {attendanceData.filter((s) => s.status === "Hadir").length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Izin: {attendanceData.filter((s) => s.status === "Izin").length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Alpha: {attendanceData.filter((s) => s.status === "Alpha").length}
                </span>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <Save className="w-4 h-4 mr-2" />
              Simpan Absensi
            </Button>
          </div>
        </CardContent>
      </Card>

      <QRScannerPanel isOpen={showScanner} onClose={() => setShowScanner(false)} />
    </div>
  );
}
