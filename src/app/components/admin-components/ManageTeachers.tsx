"use client";
import { useState, useEffect } from "react";
import {
  Search,
  Eye,
  Award,
  Trash2,
  Edit,
  X,
  Loader,
  Plus,
} from "lucide-react";

interface Teacher {
  id: string;
  fullName?: string;
  nip?: string;
  email?: string;
  alamat?: string;
  noHp?: string;
  pendidikanTerakhir?: string;
  ttl?: string;
  createdAt?: string;
  updatedAt?: string;
}

const ManageTeachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    alamat: "",
    noHp: "",
    pendidikanTerakhir: "",
    ttl: "",
    nip: "",
  });
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    alamat: "",
    noHp: "",
    pendidikanTerakhir: "",
    ttl: "",
    nip: "",
  });

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/tenaga-pendidik");

      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      } else {
        const error = await response.json();
        console.error("Failed to fetch teachers:", error);
        alert("Gagal memuat data guru: " + (error.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
      alert("Terjadi kesalahan saat memuat data guru");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.nip?.includes(searchTerm) ||
      teacher.alamat?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.ttl?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleShow = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowDetailModal(true);
  };

  const handleEdit = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setEditFormData({
      fullName: teacher.fullName || "",
      alamat: teacher.alamat || "",
      noHp: teacher.noHp || "",
      pendidikanTerakhir: teacher.pendidikanTerakhir || "",
      ttl: teacher.ttl || "",
      nip: teacher.nip || "",
    });
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setAddFormData({
      fullName: "",
      email: "",
      alamat: "",
      noHp: "",
      pendidikanTerakhir: "",
      ttl: "",
      nip: "",
    });
    setShowAddModal(true);
  };

  const handleDelete = async (teacherId: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data guru ini?")) {
      try {
        const response = await fetch(`/api/tenaga-pendidik/${teacherId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Data guru berhasil dihapus");
          fetchTeachers();
        } else {
          const error = await response.json();
          alert(`Gagal menghapus data guru: ${error.error || "Unknown error"}`);
        }
      } catch (error) {
        console.error("Error deleting teacher:", error);
        alert("Terjadi kesalahan saat menghapus data");
      }
    }
  };

  const handleSaveEdit = async () => {
    if (!selectedTeacher) return;

    try {
      const response = await fetch(
        `/api/tenaga-pendidik?id=${selectedTeacher.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );

      if (response.ok) {
        setShowEditModal(false);
        alert("Data guru berhasil diperbarui");
        fetchTeachers();
      } else {
        const error = await response.json();
        alert(`Gagal memperbarui data guru: ${error.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error updating teacher:", error);
      alert("Terjadi kesalahan saat memperbarui data");
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await fetch("/api/tenaga-pendidik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addFormData),
      });

      if (response.ok) {
        setShowAddModal(false);
        alert("Data guru berhasil ditambahkan");
        fetchTeachers();
      } else {
        const error = await response.json();
        alert(`Gagal menambahkan data guru: ${error.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Terjadi kesalahan saat menambahkan data");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <Loader className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-gray-600">Memuat data guru...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Manajemen Tenaga Pendidik
        </h1>
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
              placeholder="Cari nama, NIP, email, alamat, atau tempat tanggal lahir..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border text-gray-900 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
                  Alamat
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pendidikan Terakhir
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TTL
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    {teachers.length === 0
                      ? "Belum ada data guru"
                      : "Tidak ada data yang sesuai dengan pencarian"}
                  </td>
                </tr>
              ) : (
                filteredTeachers.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          {teacher.fullName || "Nama tidak tersedia"}
                          <Award className="w-4 h-4 ml-2 text-yellow-500" />
                        </div>
                        <div className="text-sm text-gray-500">
                          {teacher.email || "Email tidak tersedia"}
                        </div>
                        <div className="text-xs text-gray-400">
                          {teacher.noHp || "No HP tidak tersedia"}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                      {teacher.nip || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {teacher.alamat || "Alamat tidak tersedia"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.pendidikanTerakhir ||
                        "Pendidikan Terakhir tidak tersedia"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.ttl || "TTL tidak tersedia"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleShow(teacher)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="Lihat Detail"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(teacher)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                          title="Edit guru"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(teacher.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                          title="Hapus guru"
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
      {showDetailModal && selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 text-lg font-semibold">
                Detail Guru
              </h3>
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
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.fullName || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NIP
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md font-mono">
                  {selectedTeacher.nip || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.email || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.alamat || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.noHp || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pendidikan Terakhir
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.pendidikanTerakhir || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.ttl || "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Dibuat
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.createdAt
                    ? new Date(selectedTeacher.createdAt).toLocaleDateString(
                        "id-ID"
                      )
                    : "Tidak tersedia"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Terakhir Diperbarui
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {selectedTeacher.updatedAt
                    ? new Date(selectedTeacher.updatedAt).toLocaleDateString(
                        "id-ID"
                      )
                    : "Tidak tersedia"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 text-lg font-semibold">Edit Guru</h3>
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
                  NIP
                </label>
                <input
                  type="text"
                  value={editFormData.nip}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      nip: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={selectedTeacher.email || ""}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Email tidak dapat diubah
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={editFormData.fullName}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
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
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      alamat: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan alamat"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP
                </label>
                <input
                  type="text"
                  value={editFormData.noHp}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      noHp: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="08xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pendidikan Terakhir
                </label>
                <select
                  value={editFormData.pendidikanTerakhir}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      pendidikanTerakhir: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Pendidikan Terakhir</option>
                  <option value="SD/MI/Sederajat">SD/MI/Sederajat</option>
                  <option value="SMP/MTs/Sederajat">SMP/MTs/Sederajat</option>
                  <option value="SMA/SMK/MA/Sederajat">
                    SMA/SMK/MA/Sederajat
                  </option>
                  <option value="D1/D2/D3/D4">D1/D2/D3/D4</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <input
                  type="text"
                  value={editFormData.ttl}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      ttl: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kota, DD MMM YYYY"
                />
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
              <h3 className="text-gray-900 text-lg font-semibold">
                Tambah Guru Baru
              </h3>
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
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={addFormData.email}
                  onChange={(e) =>
                    setAddFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="guru@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={addFormData.fullName}
                  onChange={(e) =>
                    setAddFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NIP
                </label>
                <input
                  type="text"
                  value={addFormData.nip}
                  onChange={(e) =>
                    setAddFormData((prev) => ({ ...prev, nip: e.target.value }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan NIP"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <textarea
                  value={addFormData.alamat}
                  onChange={(e) =>
                    setAddFormData((prev) => ({
                      ...prev,
                      alamat: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan alamat"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP
                </label>
                <input
                  type="text"
                  value={addFormData.noHp}
                  onChange={(e) =>
                    setAddFormData((prev) => ({
                      ...prev,
                      noHp: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="08xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pendidikan Terakhir
                </label>
                <input
                  type="text"
                  value={addFormData.pendidikanTerakhir}
                  onChange={(e) =>
                    setAddFormData((prev) => ({
                      ...prev,
                      pendidikanTerakhir: e.target.value,
                    }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan pendidikan terakhir"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat, Tanggal Lahir
                </label>
                <input
                  type="text"
                  value={addFormData.ttl}
                  onChange={(e) =>
                    setAddFormData((prev) => ({ ...prev, ttl: e.target.value }))
                  }
                  className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kota, DD MMM YYYY"
                />
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

export default ManageTeachers;
