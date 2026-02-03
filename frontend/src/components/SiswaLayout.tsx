import { ReactNode } from "react";
import {
  LayoutDashboard,
  QrCode,
  ClipboardCheck,
  Calendar,
  FileText,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SiswaLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  userName?: string;
}

const menuItems = [
  { id: "siswa-dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "siswa-qrcode", label: "QR Code Saya", icon: QrCode },
  { id: "siswa-riwayat", label: "Riwayat Absensi", icon: ClipboardCheck },
  { id: "siswa-jadwal", label: "Jadwal Eskul", icon: Calendar },
  { id: "siswa-izin", label: "Pengajuan Izin", icon: FileText },
];

export function SiswaLayout({ children, currentPage, onNavigate, onLogout, userName = "Ahmad Rizki" }: SiswaLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Absensi Eskul</h2>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-gray-900 capitalize">
                {menuItems.find((item) => item.id === currentPage)?.label || "Dashboard"}
              </h3>
              <p className="text-sm text-gray-500">Selamat datang, {userName}!</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560005350-1e303bd1a98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9maWxlJTIwcGVyc29ufGVufDF8fHx8MTc2MzYyMzg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User profile"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500">Siswa</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}