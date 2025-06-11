'use client';
import { useState, useEffect } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Download, FileText, Award, Trash2, Edit, X, Loader, Plus } from 'lucide-react';

interface Student {
  id: string;
  fullName?: string;
  alamat?: string;
  ttl?: string;
  namaWali?: string;
  noHpWali?: string;
  program?: string;
  jenis_kelamin?: string;
  createdAt?: string;
  updatedAt?: string;
}

const ManageStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    alamat: '',
    ttl: '',
    namaWali: '',
    noHpWali: '',
    program: '',
    jenis_kelamin: ''
  });
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    alamat: '',
    ttl: '',
    namaWali: '',
    noHpWali: '',
    program: '',
    jenis_kelamin: ''
  });

  // Fetch students data from Supabase API
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/peserta-didik');
      
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        const error = await response.json();
        console.error('Failed to fetch students:', error);
        alert('Gagal memuat data siswa: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Terjadi kesalahan saat memuat data siswa');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.alamat?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.namaWali?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.ttl?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.program?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleShow = (student: Student) => {
    setSelectedStudent(student);
    setShowDetailModal(true);
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setEditFormData({
      fullName: student.fullName || '',
      alamat: student.alamat || '',
      noHpWali: student.noHpWali || '',
      ttl: student.ttl || '',
      namaWali: student.namaWali || '',
      program: student.program || '',
      jenis_kelamin: student.jenis_kelamin || ''
    });
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setAddFormData({
      fullName: '',
      alamat: '',
      ttl: '',
      namaWali: '',
      noHpWali: '',
      program: '',
      jenis_kelamin: ''
    });
    setShowAddModal(true);
  };

  const handleDelete = async (studentId: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data siswa ini?')) {
      try {
        const response = await fetch(`/api/peserta-didik?id=${studentId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          alert('Data siswa berhasil dihapus');
          fetchStudents(); // Refresh data
        } else {
          const error = await response.json();
          alert(`Gagal menghapus data siswa: ${error.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Terjadi kesalahan saat menghapus data');
      }
    }
  };

  const handleSaveEdit = async () => {
    if (!selectedStudent) return;
    
    try {
      const response = await fetch(`/api/peserta-didik?id=${selectedStudent.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
      
      if (response.ok) {
        setShowEditModal(false);
        alert('Data siswa berhasil diperbarui');
        fetchStudents(); // Refresh data
      } else {
        const error = await response.json();
        alert(`Gagal memperbarui data siswa: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Terjadi kesalahan saat memperbarui data');
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await fetch('/api/peserta-didik', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addFormData),
      });
      
      if (response.ok) {
        setShowAddModal(false);
        alert('Data siswa berhasil ditambahkan');
        fetchStudents(); // Refresh data
      } else {
        const error = await response.json();
        alert(`Gagal menambahkan data siswa: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Terjadi kesalahan saat menambahkan data');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <Loader className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-gray-600">Memuat data siswa...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Peserta Didik</h1>
        <div className="flex space-x-3">
          <button 
            onClick={handleAdd}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Tambah Data</span>
          </button>
        </div>
      </div>

      {/* Search Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari nama, alamat, nama wali, atau tempat tanggal lahir..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border text-gray-900 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
                  Nama Siswa
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alamat
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TTL
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Wali
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No HP Wali
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    {students.length === 0 ? 'Belum ada data siswa' : 'Tidak ada data yang sesuai dengan pencarian'}
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 flex items-center">
                        {student.fullName || 'Nama tidak tersedia'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {student.alamat || '-'}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {student.ttl || 'TTL tidak tersedia'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {student.namaWali || 'Nama Wali tidak tersedia'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {student.noHpWali || 'No HP tidak tersedia'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {student.program || 'Program tidak tersedia'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleShow(student)} 
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" 
                          title="Lihat Detail">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(student)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                          title="Edit siswa"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(student.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                          title="Hapus siswa"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 text-lg font-semibold">Detail Siswa</h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.fullName || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.alamat || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.ttl || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Wali
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.namaWali || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP Wali
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.noHpWali || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.program || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kelamin
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">{selectedStudent.jenis_kelamin || 'Tidak tersedia'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Dibuat
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedStudent.createdAt ? new Date(selectedStudent.createdAt).toLocaleDateString('id-ID') : 'Tidak tersedia'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Terakhir Diperbarui
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedStudent.updatedAt ? new Date(selectedStudent.updatedAt).toLocaleDateString('id-ID') : 'Tidak tersedia'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 text-lg font-semibold">Edit Siswa</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={editFormData.fullName}
                  onChange={(e) => setEditFormData(prev => ({...prev, fullName: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <textarea
                  value={editFormData.alamat}
                  onChange={(e) => setEditFormData(prev => ({...prev, alamat: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan alamat"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <input
                  type="text"
                  value={editFormData.ttl}
                  onChange={(e) => setEditFormData(prev => ({...prev, ttl: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kota, DD MMM YYYY"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Wali
                </label>
                <input
                  type="text"
                  value={editFormData.namaWali}
                  onChange={(e) => setEditFormData(prev => ({...prev, namaWali: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama wali"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP Wali
                </label>
                <input
                  type="text"
                  value={editFormData.noHpWali}
                  onChange={(e) => setEditFormData(prev => ({...prev, noHpWali: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="08xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program
                </label>
                <select
                  value={editFormData.program}
                  onChange={(e) => setEditFormData(prev => ({...prev, program: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Program</option>
                  <option value="Regular">Regular</option>
                  <option value="Fullday Paket A">Fullday Paket A</option>
                  <option value="Fullday Paket B">Fullday Paket B</option>
                  <option value="Fullday Paket C">Fullday Paket C</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kelamin
                </label>
                <select
                  value={editFormData.jenis_kelamin}
                  onChange={(e) => setEditFormData(prev => ({...prev, jenis_kelamin: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 text-lg font-semibold">Tambah Siswa Baru</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addFormData.fullName}
                  onChange={(e) => setAddFormData(prev => ({...prev, fullName: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <textarea
                  value={addFormData.alamat}
                  onChange={(e) => setAddFormData(prev => ({...prev, alamat: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan alamat"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <input
                  type="text"
                  value={addFormData.ttl}
                  onChange={(e) => setAddFormData(prev => ({...prev, ttl: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kota, DD MMM YYYY"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Wali
                </label>
                <input
                  type="text"
                  value={addFormData.namaWali}
                  onChange={(e) => setAddFormData(prev => ({...prev, namaWali: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama wali"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP Wali
                </label>
                <input
                  type="text"
                  value={addFormData.noHpWali}
                  onChange={(e) => setAddFormData(prev => ({...prev, noHpWali: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="08xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program
                </label>
                <select
                  value={addFormData.program}
                  onChange={(e) => setAddFormData(prev => ({...prev, program: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Program</option>
                  <option value="Paket A">Paket A</option>
                  <option value="Paket B">Paket B</option>
                  <option value="Paket C">Paket C</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kelamin
                </label>
                <select
                  value={addFormData.jenis_kelamin}
                  onChange={(e) => setAddFormData(prev => ({...prev, jenis_kelamin: e.target.value}))}
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSaveAdd}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStudents;