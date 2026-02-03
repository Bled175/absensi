  import { Download, Share2, QrCode as QrCodeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SiswaQRCode() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-gray-900">QR Code Saya</h2>
        <p className="text-gray-600">Gunakan QR code ini untuk absensi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* QR Code Display */}
        <Card className="lg:col-span-2 border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">QR Code Absensi</CardTitle>
            <p className="text-sm text-gray-500">Tunjukkan QR code ini kepada sekretaris untuk absensi</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200">
              {/* QR Code mockup */}
              <div className="w-80 h-80 bg-white p-6 rounded-2xl shadow-lg border-4 border-blue-600">
                <div className="w-full h-full bg-white relative">
                  {/* QR Code pattern mockup */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Corner squares */}
                    <rect x="5" y="5" width="20" height="20" fill="#2563EB" />
                    <rect x="75" y="5" width="20" height="20" fill="#2563EB" />
                    <rect x="5" y="75" width="20" height="20" fill="#2563EB" />
                    
                    {/* Random pattern */}
                    <rect x="30" y="10" width="5" height="5" fill="#1F2937" />
                    <rect x="40" y="10" width="5" height="5" fill="#1F2937" />
                    <rect x="50" y="10" width="5" height="5" fill="#1F2937" />
                    <rect x="35" y="15" width="5" height="5" fill="#1F2937" />
                    <rect x="45" y="15" width="5" height="5" fill="#1F2937" />
                    <rect x="55" y="15" width="5" height="5" fill="#1F2937" />
                    <rect x="30" y="20" width="5" height="5" fill="#1F2937" />
                    <rect x="40" y="20" width="5" height="5" fill="#1F2937" />
                    <rect x="50" y="20" width="5" height="5" fill="#1F2937" />
                    
                    <rect x="10" y="30" width="5" height="5" fill="#1F2937" />
                    <rect x="15" y="35" width="5" height="5" fill="#1F2937" />
                    <rect x="10" y="40" width="5" height="5" fill="#1F2937" />
                    <rect x="15" y="45" width="5" height="5" fill="#1F2937" />
                    <rect x="10" y="50" width="5" height="5" fill="#1F2937" />
                    
                    <rect x="30" y="30" width="5" height="5" fill="#1F2937" />
                    <rect x="35" y="35" width="5" height="5" fill="#1F2937" />
                    <rect x="40" y="40" width="5" height="5" fill="#1F2937" />
                    <rect x="45" y="45" width="5" height="5" fill="#1F2937" />
                    <rect x="50" y="50" width="5" height="5" fill="#1F2937" />
                    <rect x="55" y="55" width="5" height="5" fill="#1F2937" />
                    <rect x="60" y="60" width="5" height="5" fill="#1F2937" />
                    
                    <rect x="80" y="30" width="5" height="5" fill="#1F2937" />
                    <rect x="85" y="35" width="5" height="5" fill="#1F2937" />
                    <rect x="80" y="40" width="5" height="5" fill="#1F2937" />
                    <rect x="85" y="45" width="5" height="5" fill="#1F2937" />
                    <rect x="80" y="50" width="5" height="5" fill="#1F2937" />
                    
                    <rect x="30" y="80" width="5" height="5" fill="#1F2937" />
                    <rect x="40" y="80" width="5" height="5" fill="#1F2937" />
                    <rect x="50" y="80" width="5" height="5" fill="#1F2937" />
                    <rect x="60" y="80" width="5" height="5" fill="#1F2937" />
                    <rect x="35" y="85" width="5" height="5" fill="#1F2937" />
                    <rect x="45" y="85" width="5" height="5" fill="#1F2937" />
                    <rect x="55" y="85" width="5" height="5" fill="#1F2937" />
                  </svg>
                </div>
              </div>

              {/* Student Info */}
              <div className="mt-6 text-center">
                <h3 className="text-gray-900">Ahmad Rizki Fauzan</h3>
                <p className="text-gray-600">NIS: 2024001 | Kelas: X-1</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download QR
                </Button>
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <div className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <QrCodeIcon className="w-5 h-5 text-blue-600" />
                Cara Menggunakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                    1
                  </div>
                  <p>Buka halaman QR Code saat akan melakukan absensi</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                    2
                  </div>
                  <p>Tunjukkan QR code kepada sekretaris atau pembina</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                    3
                  </div>
                  <p>Tunggu hingga QR code berhasil di-scan</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                    4
                  </div>
                  <p>Absensi Anda akan tercatat secara otomatis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <QrCodeIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="text-sm text-blue-900">Tips Penting</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Pastikan layar tidak redup</li>
                    <li>• QR code harus terlihat jelas</li>
                    <li>• Jangan di-screenshot, buka langsung</li>
                    <li>• Scan maksimal 15 menit sebelum kegiatan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-4">
              <h4 className="text-sm text-gray-900 mb-2">QR Code Anda Aman</h4>
              <p className="text-xs text-gray-600">
                QR code ini unik untuk Anda dan dilindungi dengan enkripsi. 
                Jangan bagikan ke orang lain untuk menghindari penyalahgunaan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
