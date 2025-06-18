"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, FileText, Download, Upload, Award } from "lucide-react";
import Link from "next/link";

type Dokumen = {
  nama: string;
  url: string;
};

type TenagaPendidik = {
  id: number;
  nama: string;
  email: string;
  pengalaman: number;
  sudahSertifikasi: boolean;
  nip: string;
  mataPelajaran: string;
  pendidikanTerakhir: string;
  status: "Terverifikasi" | "Pending" | "Ditolak";
  dokumen: Dokumen[];
};

const dummyTenagaPendidik: TenagaPendidik = {
  id: 2,
  nama: "Siti Nurhasanah, M.Pd",
  email: "siti.nurhasanah@email.com",
  pengalaman: 8,
  sudahSertifikasi: true,
  nip: "198702152011012002",
  mataPelajaran: "Bahasa Indonesia",
  pendidikanTerakhir: "S2 Pendidikan Bahasa Indonesia",
  status: "Pending",
  dokumen: [
    { nama: "CV_Siti_Nurhasanah.pdf", url: "#" },
    { nama: "Ijazah_S2.pdf", url: "#" },
    { nama: "Sertifikat_Pendidik.pdf", url: "#" },
  ],
};

const EditTenagaPendidikPage = ({ params }: { params: { id: string } }) => {
  const [guru, setGuru] = useState<TenagaPendidik | null>(null);

  useEffect(() => {
    console.log("Fetching data for educator ID:", params.id);
    setGuru(dummyTenagaPendidik);
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const isCheckbox = type === "checkbox";
    const checked = isCheckbox
      ? (e.target as HTMLInputElement).checked
      : undefined;

    if (guru) {
      setGuru({
        ...guru,
        [name]: isCheckbox ? checked : value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving full educator data (Admin Action):", guru);
    alert("Data tenaga pendidik telah berhasil diperbarui!");
  };

  if (!guru) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/dashboard/tenaga-pendidik" className="hover:underline">
            Tenaga Pendidik
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium text-gray-700">Edit Data Guru</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard/tenaga-pendidik"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Data Guru</h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Kolom Kiri: Form Edit Data Guru */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">
            Informasi Personal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap (dengan gelar)
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={guru.nama}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
                value={guru.email}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nip"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              NIP (Nomor Induk Pegawai)
            </label>
            <input
              type="text"
              name="nip"
              id="nip"
              value={guru.nip}
              onChange={handleChange}
              className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 pt-4">
            Informasi Profesional
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="mataPelajaran"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mata Pelajaran Utama
              </label>
              <input
                type="text"
                name="mataPelajaran"
                id="mataPelajaran"
                value={guru.mataPelajaran}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="pendidikanTerakhir"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pendidikan Terakhir
              </label>
              <input
                type="text"
                name="pendidikanTerakhir"
                id="pendidikanTerakhir"
                value={guru.pendidikanTerakhir}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="pengalaman"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pengalaman (Tahun)
              </label>
              <input
                type="number"
                name="pengalaman"
                id="pengalaman"
                value={guru.pengalaman}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status Verifikasi
              </label>
              <select
                name="status"
                id="status"
                value={guru.status}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Terverifikasi">Terverifikasi</option>
                <option value="Pending">Pending</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
          </div>

          <div className="flex items-center pt-4">
            <input
              type="checkbox"
              name="sudahSertifikasi"
              id="sudahSertifikasi"
              checked={guru.sudahSertifikasi}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="sudahSertifikasi"
              className="ml-2 block text-sm text-gray-900"
            >
              Sudah Sertifikasi Pendidik
            </label>
            <Award className="w-4 h-4 ml-1 text-amber-500" />
          </div>

          {/* Tombol Aksi Form */}
          <div className="flex items-center space-x-4 pt-6 border-t">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Simpan Perubahan
            </button>
            <Link href="/dashboard/tenaga-pendidik">
              <button
                type="button"
                className="bg-white text-gray-700 px-6 py-2 rounded-lg border hover:bg-gray-50 font-medium"
              >
                Batal
              </button>
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Dokumen */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 self-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Dokumen Terlampir
          </h3>
          <div className="space-y-3 text-gray-700">
            {guru.dokumen.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md border"
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
          </div>
          <button className="w-full mt-4 flex items-center justify-center px-4 py-2 border-2 border-dashed rounded-lg text-gray-600 hover:bg-gray-100">
            <Upload className="w-4 h-4 mr-2" /> Unggah Dokumen
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTenagaPendidikPage;
