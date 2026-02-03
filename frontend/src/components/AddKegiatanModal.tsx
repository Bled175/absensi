import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

interface AddKegiatanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddKegiatanModal({ isOpen, onClose }: AddKegiatanModalProps) {
  const [formData, setFormData] = useState({
    nama: "",
    pembina: "",
    jadwal: "",
    deskripsi: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kegiatan data:", formData);
    onClose();
    setFormData({
      nama: "",
      pembina: "",
      jadwal: "",
      deskripsi: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Tambah Kegiatan Baru</DialogTitle>
          <p className="text-sm text-gray-500">Masukkan data kegiatan ekstrakurikuler</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama Kegiatan</Label>
            <Input
              id="nama"
              placeholder="Contoh: Basket, Robotik, dll"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pembina">Nama Pembina</Label>
            <Input
              id="pembina"
              placeholder="Masukkan nama pembina"
              value={formData.pembina}
              onChange={(e) => setFormData({ ...formData, pembina: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jadwal">Jadwal</Label>
            <Input
              id="jadwal"
              placeholder="Contoh: Senin & Rabu, 15:00-17:00"
              value={formData.jadwal}
              onChange={(e) => setFormData({ ...formData, jadwal: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deskripsi">Deskripsi (Opsional)</Label>
            <Textarea
              id="deskripsi"
              placeholder="Deskripsi kegiatan..."
              value={formData.deskripsi}
              onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              className="bg-gray-50 border-gray-200 rounded-lg min-h-[100px]"
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
