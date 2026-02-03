import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddStudentModal({ isOpen, onClose }: AddStudentModalProps) {
  const [formData, setFormData] = useState({
    nama: "",
    nis: "",
    kelas: "",
    jenisKelamin: "",
    email: "",
    noTelp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student data:", formData);
    onClose();
    setFormData({
      nama: "",
      nis: "",
      kelas: "",
      jenisKelamin: "",
      email: "",
      noTelp: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Tambah Siswa Baru</DialogTitle>
          <p className="text-sm text-gray-500">Masukkan data siswa baru</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama Lengkap</Label>
            <Input
              id="nama"
              placeholder="Masukkan nama lengkap"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nis">NIS</Label>
            <Input
              id="nis"
              placeholder="Masukkan NIS"
              value={formData.nis}
              onChange={(e) => setFormData({ ...formData, nis: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="kelas">Kelas</Label>
              <Select
                value={formData.kelas}
                onValueChange={(value) => setFormData({ ...formData, kelas: value })}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Pilih kelas" />
                </SelectTrigger>
                <SelectContent>
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
              <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
              <Select
                value={formData.jenisKelamin}
                onValueChange={(value) => setFormData({ ...formData, jenisKelamin: value })}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Laki-laki</SelectItem>
                  <SelectItem value="P">Perempuan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="noTelp">No. Telepon</Label>
            <Input
              id="noTelp"
              placeholder="Masukkan nomor telepon"
              value={formData.noTelp}
              onChange={(e) => setFormData({ ...formData, noTelp: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>

          <DialogFooter className="flex gap-2 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
