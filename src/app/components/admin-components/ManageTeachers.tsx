'use client';
import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Download, FileText, Award } from 'lucide-react';

const ManageTeachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const teachers = [
    { 
      id: 1, 
      name: 'Dr. Ahmad Wijaya, S.Pd', 
      nip: '198501012010011001',
      email: 'ahmad.wijaya@email.com',
      status: 'verified', 
      submitDate: '2024-01-15',
      subject: 'Matematika',
      experience: '15 tahun',
      education: 'S2 Pendidikan Matematika',
      documents: ['ijazah.pdf', 'sertifikat.pdf', 'sk.pdf', 'cv.pdf']
    },
    { 
      id: 2, 
      name: 'Siti Nurhasanah, M.Pd', 
      nip: '198702152011012002',
      email: 'siti.nurhasanah@email.com',
      status: 'pending', 
      submitDate: '2024-01-14',
      subject: 'Bahasa Indonesia',
      experience: '8 tahun',
      education: 'S2 Pendidikan Bahasa Indonesia',
      documents: ['ijazah.pdf', 'sertifikat.pdf', 'cv.pdf']
    },
    { 
      id: 3, 
      name: 'Budi Santoso, S.Si', 
      nip: '198903102012011003',
      email: 'budi.santoso@email.com',
      status: 'rejected', 
      submitDate: '2024-01-13',
      subject: 'Fisika',
      experience: '5 tahun',
      education: 'S1 Fisika',
      documents: ['ijazah.pdf', 'cv.pdf']
    },
    { 
      id: 4, 
      name: 'Maya Sari, M.Ed', 
      nip: '199001252013012004',
      email: 'maya.sari@email.com',
      status: 'pending', 
      submitDate: '2024-01-12',
      subject: 'Bahasa Inggris',
      experience: '10 tahun',
      education: 'S2 Pendidikan Bahasa Inggris',
      documents: ['ijazah.pdf', 'sertifikat.pdf', 'sk.pdf', 'cv.pdf', 'toefl.pdf']
    },
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.nip.includes(searchTerm) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || teacher.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Tenaga Pendidik</h1>
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
          <div className="text-2xl font-bold text-blue-600">{teachers.length}</div>
          <div className="text-sm text-gray-600">Total Pendaftar</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600">
            {teachers.filter(t => t.status === 'verified').length}
          </div>
          <div className="text-sm text-gray-600">Terverifikasi</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-yellow-600">
            {teachers.filter(t => t.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-600">Menunggu Verifikasi</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-red-600">
            {teachers.filter(t => t.status === 'rejected').length}
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
              placeholder="Cari nama, NIP, mata pelajaran, atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border text-gray-500 focus:text-black border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border text-gray-500 focus:text-black border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Semua Status</option>
              <option value="verified">Terverifikasi</option>
              <option value="pending">Pending</option>
              <option value="rejected">Ditolak</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teachers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Guru
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NIP
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mata Pelajaran
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pendidikan
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dokumen
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 flex items-center">
                        {teacher.name}
                        <Award className="w-4 h-4 ml-2 text-yellow-500" />
                      </div>
                      <div className="text-sm text-gray-500">{teacher.email}</div>
                      <div className="text-xs text-gray-400">Pengalaman: {teacher.experience}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    {teacher.nip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      {teacher.subject}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {teacher.education}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      teacher.status === 'verified' ? 'bg-green-100 text-green-800' :
                      teacher.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {teacher.status === 'verified' ? 'Terverifikasi' :
                       teacher.status === 'pending' ? 'Pending' : 'Ditolak'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{teacher.documents.length} file</span>
                      <button className="text-blue-600 hover:text-blue-800 ml-2">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" title="Lihat Detail">
                        <Eye className="w-4 h-4" />
                      </button>
                      {teacher.status === 'pending' && (
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

export default ManageTeachers;