'use client'

import { useState } from 'react';
import { Download, FileText, Calendar, BarChart3, Filter, Users, GraduationCap, UserCheck } from 'lucide-react';

const Reports = () => {
  const [reportType, setReportType] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const reports = [
    {
      id: 1,
      title: 'Laporan Pendaftaran Peserta Didik',
      type: 'pendaftaran',
      description: 'Data lengkap pendaftaran peserta didik periode January 2024',
      date: '2024-01-15',
      size: '2.5 MB',
      format: ['PDF', 'Excel'],
      icon: GraduationCap,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Laporan Aktivitas Tenaga Pendidik',
      type: 'aktivitas_guru',
      description: 'Rekap aktivitas dan kinerja tenaga pendidik',
      date: '2024-01-14',
      size: '1.8 MB',
      format: ['PDF', 'Excel'],
      icon: UserCheck,
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Laporan Aktivitas User',
      type: 'aktivitas_user',
      description: 'Data aktivitas dan engagement user platform',
      date: '2024-01-13',
      size: '3.2 MB',
      format: ['PDF', 'Excel'],
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Laporan Artikel dan Konten',
      type: 'konten',
      description: 'Statistik artikel, views, dan engagement konten',
      date: '2024-01-12',
      size: '1.5 MB',
      format: ['PDF', 'Excel'],
      icon: FileText,
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Laporan Verifikasi Dokumen',
      type: 'verifikasi',
      description: 'Status verifikasi dokumen peserta didik dan tenaga pendidik',
      date: '2024-01-11',
      size: '2.1 MB',
      format: ['PDF', 'Excel'],
      icon: BarChart3,
      color: 'bg-red-500'
    },
  ];

  const filteredReports = reports.filter(report => {
    const matchesType = reportType === 'all' || report.type === reportType;
    const matchesDate = (!dateFrom || new Date(report.date) >= new Date(dateFrom)) &&
                       (!dateTo || new Date(report.date) <= new Date(dateTo));
    return matchesType && matchesDate;
  });

  const quickStats = [
    { label: 'Total Laporan', value: reports.length, icon: FileText, color: 'text-blue-600' },
    { label: 'Laporan Bulan Ini', value: 12, icon: Calendar, color: 'text-green-600' },
    { label: 'Download Minggu Ini', value: 45, icon: Download, color: 'text-purple-600' },
    { label: 'Ukuran Total', value: '12.8 GB', icon: BarChart3, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Laporan</h1>
        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>Generate Laporan Baru</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Laporan</label>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Semua Laporan</option>
                <option value="pendaftaran">Pendaftaran</option>
                <option value="aktivitas_guru">Aktivitas Guru</option>
                <option value="aktivitas_user">Aktivitas User</option>
                <option value="konten">Konten</option>
                <option value="verifikasi">Verifikasi</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Dari</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Sampai</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button 
              onClick={() => {
                setReportType('all');
                setDateFrom('');
                setDateTo('');
              }}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${report.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-500">{report.date}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Ukuran: {report.size}</span>
                <div className="flex space-x-1">
                  {report.format.map((format) => (
                    <span key={format} className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Excel</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReports.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada laporan ditemukan</h3>
          <p className="text-gray-500">Coba ubah filter atau generate laporan baru</p>
        </div>
      )}
    </div>
  );
};

export default Reports;