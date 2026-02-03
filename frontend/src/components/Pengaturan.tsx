import { useState } from "react";
import { Save, Bell, Mail, Shield, Database, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Pengaturan() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true,
  });

  const [settings, setSettings] = useState({
    language: "id",
    timezone: "Asia/Jakarta",
    dateFormat: "DD/MM/YYYY",
  });

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-gray-900">Pengaturan</h2>
        <p className="text-gray-600">Kelola preferensi dan konfigurasi sistem</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Bell className="w-5 h-5 text-blue-600" />
              Notifikasi
            </CardTitle>
            <p className="text-sm text-gray-500">Kelola preferensi notifikasi</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <Label htmlFor="email-notif" className="text-gray-900">
                    Notifikasi Email
                  </Label>
                  <p className="text-sm text-gray-500">Terima notifikasi melalui email</p>
                </div>
              </div>
              <Switch
                id="email-notif"
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-500" />
                <div>
                  <Label htmlFor="push-notif" className="text-gray-900">
                    Push Notification
                  </Label>
                  <p className="text-sm text-gray-500">Notifikasi langsung di browser</p>
                </div>
              </div>
              <Switch
                id="push-notif"
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <Label htmlFor="sms-notif" className="text-gray-900">
                    SMS Notification
                  </Label>
                  <p className="text-sm text-gray-500">Terima notifikasi via SMS</p>
                </div>
              </div>
              <Switch
                id="sms-notif"
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, sms: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <Label htmlFor="weekly-notif" className="text-gray-900">
                    Laporan Mingguan
                  </Label>
                  <p className="text-sm text-gray-500">Ringkasan aktivitas setiap minggu</p>
                </div>
              </div>
              <Switch
                id="weekly-notif"
                checked={notifications.weekly}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, weekly: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Globe className="w-5 h-5 text-blue-600" />
              Pengaturan Sistem
            </CardTitle>
            <p className="text-sm text-gray-500">Konfigurasi tampilan dan format</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language" className="text-gray-700">
                Bahasa
              </Label>
              <Select value={settings.language} onValueChange={(value) => setSettings({ ...settings, language: value })}>
                <SelectTrigger id="language" className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-gray-700">
                Zona Waktu
              </Label>
              <Select value={settings.timezone} onValueChange={(value) => setSettings({ ...settings, timezone: value })}>
                <SelectTrigger id="timezone" className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Jakarta">WIB - Jakarta</SelectItem>
                  <SelectItem value="Asia/Makassar">WITA - Makassar</SelectItem>
                  <SelectItem value="Asia/Jayapura">WIT - Jayapura</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateFormat" className="text-gray-700">
                Format Tanggal
              </Label>
              <Select value={settings.dateFormat} onValueChange={(value) => setSettings({ ...settings, dateFormat: value })}>
                <SelectTrigger id="dateFormat" className="bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Shield className="w-5 h-5 text-blue-600" />
              Keamanan
            </CardTitle>
            <p className="text-sm text-gray-500">Pengaturan keamanan akun</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-gray-700">
                Password Saat Ini
              </Label>
              <Input
                id="current-password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-gray-700">
                Password Baru
              </Label>
              <Input
                id="new-password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-700">
                Konfirmasi Password Baru
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Database className="w-5 h-5 text-blue-600" />
              Manajemen Data
            </CardTitle>
            <p className="text-sm text-gray-500">Backup dan restore data</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-sm text-blue-900 mb-2">Backup Data</h4>
              <p className="text-sm text-blue-700 mb-3">
                Backup terakhir: 19 Mar 2025, 02:00
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Backup Sekarang
              </Button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm text-gray-900 mb-2">Export Data</h4>
              <p className="text-sm text-gray-600 mb-3">
                Download semua data dalam format Excel atau PDF
              </p>
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Export Excel
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                  Export PDF
                </Button>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="text-sm text-red-900 mb-2">Hapus Semua Data</h4>
              <p className="text-sm text-red-700 mb-3">
                Tindakan ini tidak dapat dibatalkan
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                Hapus Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          <Save className="w-4 h-4 mr-2" />
          Simpan Semua Perubahan
        </Button>
      </div>
    </div>
  );
}
