import { X, QrCode, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

interface QRScannerPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QRScannerPanel({ isOpen, onClose }: QRScannerPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-gray-900">QR Scanner</h3>
              <p className="text-sm text-gray-500">Scan QR code siswa untuk absensi</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Scanner Area */}
          <div className="flex-1 p-6 space-y-6">
            {/* QR Scanner Mockup */}
            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-blue-500 rounded-lg relative">
                  {/* Scanning animation corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500"></div>
                  
                  {/* Scanning line animation */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-scan"></div>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="inline-block bg-black/70 px-4 py-2 rounded-lg">
                  <p className="text-white text-sm">Arahkan kamera ke QR code</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex gap-3">
                <QrCode className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-sm text-blue-900">Cara Menggunakan Scanner:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Minta siswa menunjukkan QR code mereka</li>
                    <li>• Arahkan kamera ke QR code</li>
                    <li>• Tunggu hingga terdeteksi otomatis</li>
                    <li>• Sistem akan mencatat kehadiran</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Scans */}
            <div className="space-y-3">
              <h4 className="text-sm text-gray-700">Scan Terakhir:</h4>
              <div className="space-y-2">
                {[
                  { nama: "Ahmad Rizki Fauzan", kelas: "X-1", time: "14:30" },
                  { nama: "Siti Nurhaliza", kelas: "XI-2", time: "14:28" },
                ].map((scan, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-900">{scan.nama}</p>
                        <p className="text-xs text-gray-500">{scan.kelas}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{scan.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <Button
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
            >
              Tutup Scanner
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0; }
          50% { top: calc(100% - 4px); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
