// "use client"

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { Users, FileText, GraduationCap, UserCheck, TrendingUp, Bell } from 'lucide-react';

// const Dashboard = () => {
//   const stats = [
//     { label: 'Total User', value: '1,234', icon: Users, color: 'bg-blue-500', change: '+12%' },
//     { label: 'Artikel Aktif', value: '456', icon: FileText, color: 'bg-green-500', change: '+8%' },
//     { label: 'Peserta Didik', value: '2,890', icon: GraduationCap, color: 'bg-purple-500', change: '+15%' },
//     { label: 'Tenaga Pendidik', value: '124', icon: UserCheck, color: 'bg-orange-500', change: '+5%' },
//   ];

//   const chartData = [
//     { name: 'Jan', users: 400, articles: 240 },
//     { name: 'Feb', users: 300, articles: 139 },
//     { name: 'Mar', users: 500, articles: 380 },
//     { name: 'Apr', users: 780, articles: 390 },
//     { name: 'Mei', users: 890, articles: 480 },
//     { name: 'Jun', users: 1200, articles: 620 },
//   ];

//   const pieData = [
//     { name: 'Aktif', value: 70, color: '#22c55e' },
//     { name: 'Pending', value: 20, color: '#f59e0b' },
//     { name: 'Nonaktif', value: 10, color: '#ef4444' },
//   ];

//   const notifications = [
//     { title: 'User baru terdaftar', time: '2 menit lalu', type: 'info' },
//     { title: 'Artikel "Pendidikan Digital" dipublikasikan', time: '15 menit lalu', type: 'success' },
//     { title: 'Verifikasi dokumen pending', time: '1 jam lalu', type: 'warning' },
//     { title: 'Laporan bulanan siap diunduh', time: '2 jam lalu', type: 'info' },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//         <div className="flex items-center space-x-2 text-sm text-gray-600">
//           <TrendingUp className="w-4 h-4" />
//           <span>Data terupdate: {new Date().toLocaleDateString('id-ID')}</span>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
//                   <p className="text-sm text-green-600 mt-1">{stat.change}</p>
//                 </div>
//                 <div className={`${stat.color} p-3 rounded-lg`}>
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Bar Chart */}
//         <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistik Bulanan</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="users" fill="#6366f1" name="Users" radius={4} />
//               <Bar dataKey="articles" fill="#22c55e" name="Artikel" radius={4} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Pie Chart */}
//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Status User</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 label={({ name, percent }) => `${name} ${(percent).toFixed(0)}%`}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Notifications */}
//       <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Notifikasi Terbaru</h3>
//           <Bell className="w-5 h-5 text-gray-400" />
//         </div>
//         <div className="space-y-3">
//           {notifications.map((notification, index) => (
//             <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <div>
//                 <p className="font-medium text-gray-800">{notification.title}</p>
//                 <p className="text-sm text-gray-600">{notification.time}</p>
//               </div>
//               <div className={`w-3 h-3 rounded-full ${
//                 notification.type === 'success' ? 'bg-green-500' :
//                 notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
//               }`}></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
