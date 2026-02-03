import { useState } from "react";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";
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
import { AddStudentModal } from "./AddStudentModal";

const studentsData = [
  { id: 1, nama: "Ahmad Rizki Fauzan", nis: "2024001", kelas: "X-1", jenisKelamin: "L", status: "Aktif" },
  { id: 2, nama: "Siti Nurhaliza", nis: "2024002", kelas: "XI-2", jenisKelamin: "P", status: "Aktif" },
  { id: 3, nama: "Budi Santoso", nis: "2024003", kelas: "X-3", jenisKelamin: "L", status: "Aktif" },
  { id: 4, nama: "Dewi Lestari", nis: "2024004", kelas: "XII-1", jenisKelamin: "P", status: "Aktif" },
  { id: 5, nama: "Eko Prasetyo", nis: "2024005", kelas: "XI-1", jenisKelamin: "L", status: "Aktif" },
  { id: 6, nama: "Fitri Handayani", nis: "2024006", kelas: "X-2", jenisKelamin: "P", status: "Aktif" },
  { id: 7, nama: "Gilang Ramadhan", nis: "2024007", kelas: "XII-3", jenisKelamin: "L", status: "Aktif" },
  { id: 8, nama: "Hana Kartika Sari", nis: "2024008", kelas: "XI-2", jenisKelamin: "P", status: "Aktif" },
  { id: 9, nama: "Irfan Hakim", nis: "2024009", kelas: "X-1", jenisKelamin: "L", status: "Nonaktif" },
  { id: 10, nama: "Julia Ramadhani", nis: "2024010", kelas: "XII-2", jenisKelamin: "P", status: "Aktif" },
];

export function DataSiswa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterKelas, setFilterKelas] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.nis.includes(searchQuery);
    const matchesKelas = filterKelas === "all" || student.kelas === filterKelas;
    return matchesSearch && matchesKelas;
  });

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Data Siswa</h2>
          <p className="text-gray-600">Kelola data siswa peserta ekstrakurikuler</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Siswa
        </Button>
      </div>

      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Cari nama atau NIS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <Select value={filterKelas} onValueChange={setFilterKelas}>
                <SelectTrigger className="w-40 bg-gray-50 border-gray-200 rounded-lg">
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Nama</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">NIS</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Kelas</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Jenis Kelamin</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900">{student.nama}</td>
                    <td className="py-3 px-4 text-gray-600">{student.nis}</td>
                    <td className="py-3 px-4 text-gray-600">{student.kelas}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {student.jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                          student.status === "Aktif"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {student.status}
                      </span>
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

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada data siswa yang ditemukan</p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredStudents.length} dari {studentsData.length} siswa
            </p>
          </div>
        </CardContent>
      </Card>

      <AddStudentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
