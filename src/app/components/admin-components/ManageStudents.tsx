'use client';

import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Download, FileText } from 'lucide-react';

const ManageStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const students = [
    { 
      id: 1, 
      name: 'Andi Pratama', 
      nisn: '1234567890',
      email: 'andi.pratama@email.com',
      status: 'verified', 
      submitDate: '2024-01-15',
      school: 'SMA Negeri 1 Jakarta',
      documents: ['ijazah.pdf', 'ktp.pdf', 'foto.jpg']
    },
    { 
      id: 2, 
      name: 'Sari Indah', 
      nisn: '1234567891',
      email: 'sari.indah@email.com',
      status: 'pending', 
      submitDate: '2024-01-14',
      school: 'SMA Negeri 2 Bandung',
      documents: ['ijazah.pdf', 'ktp.pdf']
    },
    { 
      id: 3, 
      name: 'Budi Setiawan', 
      nisn: '1234567892',
      email: 'budi.setiawan@email.com',
      status: 'rejected', 
      submitDate: '2024-01-13',
      school: 'SMA Swasta Jakarta',
      documents: ['ijazah.pdf']
    },
    { 
      id: 4, 
      name: 'Maya Putri', 
      nisn: '1234567893',
      email: 'maya.putri@email.com',
      status: 'pending', 
      submitDate: '2024-01-12',
      school: 'SMA Negeri 3 Surabaya',
      documents: ['ijazah.pdf', 'ktp.pdf', 'foto.jpg', 'rapor.pdf']
    },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.nisn.includes(searchTerm) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Peserta Didik</h1>
        <div className="flex space-x-3">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">{students.length}</div>
          <div className="text-sm text-gray-600">Total Pendaftar</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600">
            {students.filter(s => s.status === 'verified').length}
          </div>
          <div className="text-sm text-gray-600">Terverifikasi</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-yellow-600">
            {students.filter(s => s.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-600">Menunggu Verifikasi</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-red-600">
            {students.filter(s => s.status === 'rejected').length}
          </div>
          <div className="text-sm text-gray-600">Ditolak</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari nama, NISN, atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Semua Status</option>
              <option value="verified">Terverifikasi</option>
              <option value="pending">Pending</option>
              <option value="rejected">Ditolak</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Siswa
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NISN
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sekolah Asal
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dokumen
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Daftar
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    {student.nisn}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {student.school}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{student.documents.length} file</span>
                      <button className="text-blue-600 hover:text-blue-800 ml-2">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.submitDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" title="Lihat Detail">
                        <Eye className="w-4 h-4" />
                      </button>
                      {student.status === 'pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50" title="Verifikasi">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50" title="Tolak">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
