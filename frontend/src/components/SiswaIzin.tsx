import { useState } from "react";
import { FileText, Upload, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const riwayatIzin = [
  {
    id: 1,
    eskul: "Robotik",
    tanggal: "2025-03-17",
    alasan: "Sakit demam",
    status: "approved",
    tanggalPengajuan: "2025-03-16",
    keterangan: "Disetujui oleh Pak Gilang",
  },
  {
    id: 2,
    eskul: "Basket",
    tanggal: "2025-03-10",
    alasan: "Keperluan keluarga",
    status: "approved",
    tanggalPengajuan: "2025-03-08",
    keterangan: "Disetujui oleh Pak Agus",
  },
  {
    id: 3,
    eskul: "PMR",
    tanggal: "2025-03-05",
    alasan: "Mengikuti lomba",
    status: "approved",
    tanggalPengajuan: "2025-03-03",
    keterangan: "Disetujui oleh Bu Dewi",
  },
];

export function SiswaIzin() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEskul, setSelectedEskul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [alasan, setAlasan] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would submit to backend
    alert(`Izin berhasil diajukan untuk ${selectedEskul} pada tanggal ${tanggal}`);
    setIsDialogOpen(false);
    // Reset form
    setSelectedEskul("");
    setTanggal("");
    setAlasan("");
    setUploadedFile(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            <CheckCircle className="w-3 h-3" />
            Disetujui
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
            <Clock className="w-3 h-3" />
            Menunggu
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
            <XCircle className="w-3 h-3" />
            Ditolak
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Pengajuan Izin</h2>
          <p className="text-gray-600">Ajukan izin ketidakhadiran</p>
        </div>

        {/* Button to open form */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <FileText className="w-4 h-4 mr-2" />
              Ajukan Izin
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Form Pengajuan Izin</DialogTitle>
              <DialogDescription>
                Isi form berikut untuk mengajukan izin ketidakhadiran
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="eskul">Ekstrakurikuler</Label>
                <Select value={selectedEskul} onValueChange={setSelectedEskul} required>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Pilih eskul" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basket">Basket</SelectItem>
                    <SelectItem value="PMR">PMR</SelectItem>
                    <SelectItem value="Robotik">Robotik</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tanggal">Tanggal Izin</Label>
                <Input
                  id="tanggal"
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alasan">Alasan</Label>
                <Textarea
                  id="alasan"
                  placeholder="Tuliskan alasan izin Anda..."
                  value={alasan}
                  onChange={(e) => setAlasan(e.target.value)}
                  className="bg-gray-50 border-gray-200 rounded-lg min-h-24"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload Surat Izin (Opsional)</Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                  />
                  {uploadedFile && (
                    <p className="text-xs text-gray-500 mt-1">
                      File: {uploadedFile.name}
                    </p>
                  )}
                </div>
                <p className="text-xs text-gray-500">Format: PDF, JPG, PNG (Max 2MB)</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1 rounded-lg"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Ajukan Izin
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200 bg-green-50 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-700">Disetujui</p>
                <h3 className="text-green-900">3</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-600 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-yellow-700">Menunggu</p>
                <h3 className="text-yellow-900">0</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-600 rounded-lg">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-red-700">Ditolak</p>
                <h3 className="text-red-900">0</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Penting */}
      <Card className="border-blue-200 bg-blue-50 shadow-sm">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-sm text-blue-900 mb-1">Ketentuan Pengajuan Izin</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Izin harus diajukan minimal H-1 sebelum kegiatan</li>
                <li>• Untuk izin sakit, upload surat keterangan dokter (jika ada)</li>
                <li>• Izin akan diproses maksimal 1x24 jam</li>
                <li>• Jika ditolak, Anda akan menerima notifikasi dengan alasan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Riwayat Izin */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Riwayat Pengajuan Izin</CardTitle>
          <p className="text-sm text-gray-500">Daftar semua izin yang pernah diajukan</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">No</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Eskul</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Tanggal Izin</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Alasan</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Diajukan</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {riwayatIzin.map((izin, index) => (
                  <tr
                    key={izin.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-900">{izin.eskul}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(izin.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{izin.alasan}</td>
                    <td className="py-3 px-4">{getStatusBadge(izin.status)}</td>
                    <td className="py-3 px-4 text-gray-500 text-sm">
                      {new Date(izin.tanggalPengajuan).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{izin.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {riwayatIzin.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Belum ada riwayat izin</p>
              <p className="text-sm text-gray-400">Ajukan izin ketika Anda berhalangan hadir</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
