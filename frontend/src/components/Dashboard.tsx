import { Users, Calendar, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsCards = [
  {
    title: "Total Siswa",
    value: "342",
    icon: Users,
    color: "bg-blue-600",
    change: "+12 bulan ini",
  },
  {
    title: "Total Eskul",
    value: "18",
    icon: Calendar,
    color: "bg-green-600",
    change: "Aktif",
  },
  {
    title: "Kehadiran Hari Ini",
    value: "89%",
    icon: CheckCircle,
    color: "bg-purple-600",
    change: "+5% dari kemarin",
  },
  {
    title: "Aktivitas Minggu Ini",
    value: "245",
    icon: TrendingUp,
    color: "bg-orange-600",
    change: "Absensi tercatat",
  },
];

const attendanceData = [
  { name: "Sen", hadir: 245, izin: 15, alpha: 5 },
  { name: "Sel", hadir: 252, izin: 12, alpha: 3 },
  { name: "Rab", hadir: 238, izin: 18, alpha: 7 },
  { name: "Kam", hadir: 261, izin: 10, alpha: 4 },
  { name: "Jum", hadir: 255, izin: 14, alpha: 6 },
  { name: "Sab", hadir: 180, izin: 8, alpha: 2 },
];

const recentActivity = [
  { name: "Ahmad Rizki", eskul: "Basket", status: "Hadir", time: "14:30", class: "X-1" },
  { name: "Siti Nurhaliza", eskul: "Paduan Suara", status: "Hadir", time: "14:28", class: "XI-2" },
  { name: "Budi Santoso", eskul: "PMR", status: "Izin", time: "14:25", class: "X-3" },
  { name: "Dewi Lestari", eskul: "Pramuka", status: "Hadir", time: "14:20", class: "XII-1" },
  { name: "Eko Prasetyo", eskul: "Futsal", status: "Hadir", time: "14:18", class: "XI-1" },
  { name: "Fitri Handayani", eskul: "Tari Tradisional", status: "Alpha", time: "14:15", class: "X-2" },
  { name: "Gilang Ramadhan", eskul: "Robotik", status: "Hadir", time: "14:12", class: "XII-3" },
  { name: "Hana Kartika", eskul: "Basket", status: "Hadir", time: "14:10", class: "XI-2" },
];

export function Dashboard() {
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Tren Kehadiran Mingguan</CardTitle>
            <p className="text-sm text-gray-500">Grafik kehadiran 7 hari terakhir</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="hadir" stroke="#2563EB" strokeWidth={2} name="Hadir" />
                <Line type="monotone" dataKey="izin" stroke="#F59E0B" strokeWidth={2} name="Izin" />
                <Line type="monotone" dataKey="alpha" stroke="#DC2626" strokeWidth={2} name="Alpha" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Distribusi Status Kehadiran</CardTitle>
            <p className="text-sm text-gray-500">Perbandingan status minggu ini</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
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
      </div>

      {/* Recent Activity Table */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Aktivitas Absensi Terbaru</CardTitle>
          <p className="text-sm text-gray-500">10 absensi terakhir yang tercatat</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Nama Siswa</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Kelas</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Ekstrakurikuler</th>
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
                    <td className="py-3 px-4 text-gray-900">{activity.name}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.class}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.eskul}</td>
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
                    <td className="py-3 px-4 text-gray-600">{activity.time}</td>
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
