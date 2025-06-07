"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, FileText, Download, Upload } from "lucide-react";
import Link from "next/link";

// Tipe data tidak perlu diubah
type Dokumen = {
  nama: string;
  url: string;
};

type PesertaDidik = {
  id: number;
  nama: string;
  email: string;
  nisn: string;
  sekolahAsal: string;
  status: "Terverifikasi" | "Pending" | "Ditolak";
  tanggalDaftar: string;
  dokumen: Dokumen[];
};

// Data dummy yang sama
const dummyPesertaDidik: PesertaDidik = {
  id: 2,
  nama: "Sari Indah",
  email: "sari.indah@email.com",
  nisn: "1234567891",
  sekolahAsal: "SMA Negeri 2 Bandung",
  status: "Pending",
  tanggalDaftar: "2024-01-14",
  dokumen: [
    { nama: "Ijazah SMP.pdf", url: "/dokumen/ijazah.pdf" },
    { nama: "Kartu Keluarga.pdf", url: "/dokumen/kk.pdf" },
  ],
};

// Komponen utama untuk halaman Edit Peserta Didik
const EditPesertaDidikPage = ({ params }: { params: { id: string } }) => {
  const [siswa, setSiswa] = useState<PesertaDidik | null>(null);

  useEffect(() => {
    // Logika pengambilan data tetap sama
    console.log("Fetching data for student ID:", params.id);
    setSiswa(dummyPesertaDidik);
  }, [params.id]);

  // Handler ini sekarang akan menangani SEMUA input form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (siswa) {
      setSiswa({ ...siswa, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirim seluruh objek 'siswa' yang telah diperbarui ke API
    console.log("Saving full student data (Admin Action):", siswa);
    alert("Data siswa telah berhasil diperbarui!");
  };

  if (!siswa) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/dashboard/peserta-didik" className="hover:underline">
            Peserta Didik
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium text-gray-700">Edit Siswa</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard/peserta-didik"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Data Siswa</h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Kolom Kiri: Form Edit Data Siswa */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">
            Data Diri Siswa
          </h3>

          {/* Field Nama */}
          <div>
            <label
              htmlFor="nama"
              className=" block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={siswa.nama}
              onChange={handleChange}
              className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Field Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={siswa.email}
              onChange={handleChange}
              className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Field NISN */}
            <div>
              <label
                htmlFor="nisn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NISN
              </label>
              <input
                type="text"
                name="nisn"
                id="nisn"
                value={siswa.nisn}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Field Sekolah Asal */}
            <div>
              <label
                htmlFor="sekolahAsal"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sekolah Asal
              </label>
              <input
                type="text"
                name="sekolahAsal"
                id="sekolahAsal"
                value={siswa.sekolahAsal}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 pt-4">
            Status & Tanggal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dropdown Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status Pendaftaran
              </label>
              <select
                name="status"
                id="status"
                value={siswa.status}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Terverifikasi">Terverifikasi</option>
                <option value="Pending">Pending</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>

            {/* Field Tanggal Daftar */}
            <div>
              <label
                htmlFor="tanggalDaftar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tanggal Daftar
              </label>
              <input
                type="date"
                name="tanggalDaftar"
                id="tanggalDaftar"
                value={siswa.tanggalDaftar}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Tombol Aksi Form */}
          <div className="flex items-center space-x-4 pt-4 border-t">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Simpan Perubahan
            </button>
            <Link href="/dashboard/peserta-didik">
              <button
                type="button"
                className="bg-white text-gray-700 px-6 py-2 rounded-lg border hover:bg-gray-50 font-medium"
              >
                Batal
              </button>
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Dokumen (tetap sama) */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 self-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Dokumen Terlampir
          </h3>
          <div className="space-y-3">
            {siswa.dokumen.map((doc, index) => (
              <div
                key={index}
                className="text-gray-700 flex items-center justify-between p-3 bg-gray-50 rounded-md border"
              >
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-3 text-gray-500" />
                  <span>{doc.nama}</span>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-gray-200"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
            {siswa.dokumen.length === 0 && (
              <p className="text-sm text-gray-500">Tidak ada dokumen.</p>
            )}
          </div>
          <button className="w-full mt-4 flex items-center justify-center px-4 py-2 border-2 border-dashed rounded-lg text-gray-600 hover:bg-gray-100">
            <Upload className="w-4 h-4 mr-2" /> Unggah Dokumen
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPesertaDidikPage;
