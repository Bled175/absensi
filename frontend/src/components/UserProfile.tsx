import { useState } from "react";
import { Edit, Lock, Mail, Phone, User, Building } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: "Admin User",
    email: "admin@sekolah.com",
    phone: "+62 812-3456-7890",
    role: "Administrator",
    sekolah: "SMA Negeri 1 Jakarta",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle save logic here
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-gray-900">Profil Pengguna</h2>
        <p className="text-gray-600">Kelola informasi akun Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560005350-1e303bd1a98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9maWxlJTIwcGVyc29ufGVufDF8fHx8MTc2MzYyMzg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="User profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="text-gray-900">{formData.nama}</h3>
                <p className="text-gray-600">{formData.role}</p>
                <p className="text-sm text-gray-500 mt-1">{formData.sekolah}</p>
              </div>
              <div className="w-full pt-4 border-t border-gray-200">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Lock className="w-4 h-4 mr-2" />
                  Ganti Password
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2 border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900">Informasi Pribadi</CardTitle>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : null}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nama" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4 text-gray-500" />
                    Nama Lengkap
                  </Label>
                  <Input
                    id="nama"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-50 border-gray-200 rounded-lg disabled:opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-gray-500" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-50 border-gray-200 rounded-lg disabled:opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-gray-500" />
                    No. Telepon
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-50 border-gray-200 rounded-lg disabled:opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4 text-gray-500" />
                    Role
                  </Label>
                  <Input
                    id="role"
                    value={formData.role}
                    disabled
                    className="bg-gray-50 border-gray-200 rounded-lg disabled:opacity-70"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="sekolah" className="flex items-center gap-2 text-gray-700">
                    <Building className="w-4 h-4 text-gray-500" />
                    Sekolah
                  </Label>
                  <Input
                    id="sekolah"
                    value={formData.sekolah}
                    onChange={(e) => setFormData({ ...formData, sekolah: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-50 border-gray-200 rounded-lg disabled:opacity-70"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <Button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
                  >
                    Batal
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Simpan Perubahan
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Login</p>
                <h3 className="text-gray-900 mt-1">142</h3>
                <p className="text-xs text-gray-500 mt-1">Bulan ini: 23</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Absensi Dikelola</p>
                <h3 className="text-gray-900 mt-1">1,245</h3>
                <p className="text-xs text-gray-500 mt-1">Minggu ini: 87</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Edit className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Terakhir Login</p>
                <h3 className="text-gray-900 mt-1">Hari ini</h3>
                <p className="text-xs text-gray-500 mt-1">20 Mar 2025, 09:30</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
