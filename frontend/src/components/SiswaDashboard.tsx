import { CheckCircle, Clock, Calendar, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsCards = [
  {
    title: "Kehadiran Bulan Ini",
    value: "92%",
    icon: CheckCircle,
    color: "bg-green-600",
    change: "23 dari 25 pertemuan",
  },
  {
    title: "Total Eskul Diikuti",
    value: "3",
    icon: Calendar,
    color: "bg-blue-600",
    change: "Basket, PMR, Robotik",
  },
  {
    title: "Jam Aktif",
    value: "48",
    icon: Clock,
    color: "bg-purple-600",
    change: "Bulan ini",
  },
  {
    title: "Prestasi",
    value: "2",
    icon: Trophy,
    color: "bg-orange-600",
    change: "Sertifikat diperoleh",
  },
];

const attendanceData = [
  { bulan: "Sep", hadir: 18, izin: 2, alpha: 0 },
  { bulan: "Okt", hadir: 19, izin: 1, alpha: 0 },
  { bulan: "Nov", hadir: 17, izin: 2, alpha: 1 },
  { bulan: "Des", hadir: 20, izin: 0, alpha: 0 },
  { bulan: "Jan", hadir: 18, izin: 2, alpha: 0 },
  { bulan: "Feb", hadir: 19, izin: 1, alpha: 0 },
];

const myEskul = [
  { nama: "Basket", pembina: "Pak Agus Supriadi", jadwal: "Senin & Rabu, 15:00-17:00", nextSession: "Senin, 24 Mar 2025" },
  { nama: "PMR", pembina: "Bu Dewi Kusuma", jadwal: "Rabu, 14:00-16:00", nextSession: "Rabu, 26 Mar 2025" },
  { nama: "Robotik", pembina: "Pak Gilang Pratama", jadwal: "Senin & Rabu, 14:00-16:00", nextSession: "Senin, 24 Mar 2025" },
];

const recentActivity = [
  { eskul: "Basket", tanggal: "20 Mar 2025", status: "Hadir", waktu: "14:30" },
  { eskul: "Robotik", tanggal: "19 Mar 2025", status: "Hadir", waktu: "14:15" },
  { eskul: "Basket", tanggal: "18 Mar 2025", status: "Hadir", waktu: "14:28" },
  { eskul: "PMR", tanggal: "18 Mar 2025", status: "Hadir", waktu: "14:20" },
  { eskul: "Robotik", tanggal: "17 Mar 2025", status: "Izin", waktu: "-" },
];

export function SiswaDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <h3 className="text-gray-900">{stat.value}</h3>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Riwayat Kehadiran</CardTitle>
            <p className="text-sm text-gray-500">Statistik kehadiran 6 bulan terakhir</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="bulan" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="hadir" fill="#2563EB" radius={[8, 8, 0, 0]} name="Hadir" />
                <Bar dataKey="izin" fill="#F59E0B" radius={[8, 8, 0, 0]} name="Izin" />
                <Bar dataKey="alpha" fill="#DC2626" radius={[8, 8, 0, 0]} name="Alpha" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* My Eskul */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Eskul Saya</CardTitle>
            <p className="text-sm text-gray-500">Kegiatan yang sedang diikuti</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {myEskul.map((eskul, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-gray-900">{eskul.nama}</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Aktif
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Pembina: {eskul.pembina}</p>
                  <p className="text-xs text-gray-500 mb-2">{eskul.jadwal}</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-blue-100">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <p className="text-xs text-blue-700">Sesi berikutnya: {eskul.nextSession}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Aktivitas Terakhir</CardTitle>
          <p className="text-sm text-gray-500">Riwayat absensi terbaru</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Ekstrakurikuler</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Waktu</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900">{activity.eskul}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.tanggal}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                          activity.status === "Hadir"
                            ? "bg-green-100 text-green-700"
                            : activity.status === "Izin"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{activity.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
