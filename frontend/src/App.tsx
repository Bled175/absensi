import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { Layout } from "./components/Layout";
import { SiswaLayout } from "./components/SiswaLayout";
import { Dashboard } from "./components/Dashboard";
import { DataSiswa } from "./components/DataSiswa";
import { DataKegiatan } from "./components/DataKegiatan";
import { Absensi } from "./components/Absensi";
import { RekapAbsensi } from "./components/RekapAbsensi";
import { UserProfile } from "./components/UserProfile";
import { Pengaturan } from "./components/Pengaturan";
import { SiswaDashboard } from "./components/SiswaDashboard";
import { SiswaQRCode } from "./components/SiswaQRCode";
import { SiswaRiwayat } from "./components/SiswaRiwayat";
import { SiswaJadwal } from "./components/SiswaJadwal";
import { SiswaIzin } from "./components/SiswaIzin";
import "./styles/globals.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("siswa-dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("siswa-dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("dashboard");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Render pages for Siswa (Student member of ekstrakurikuler)
  const renderSiswaPage = () => {
    switch (currentPage) {
      case "siswa-dashboard":
        return <SiswaDashboard />;
      case "siswa-qrcode":
        return <SiswaQRCode />;
      case "siswa-riwayat":
        return <SiswaRiwayat />;
      case "siswa-jadwal":
        return <SiswaJadwal />;
      case "siswa-izin":
        return <SiswaIzin />;
      default:
        return <SiswaDashboard />;
    }
  };

  // Always use student layout (single ekstrakurikuler system)
  return (
    <SiswaLayout
      currentPage={currentPage}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
      userName="Ahmad Rizki"
    >
      {renderSiswaPage()}
    </SiswaLayout>
  );
}