"use client";

import { useState } from 'react';
import { Eye, Trash2, GraduationCap, UserSquare, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

// --- TIPE DATA (Bisa diimpor dari file terpisah) ---
type PesertaDidik = {
  id: number;
  nama: string;
  email: string;
  nisn: string;
  sekolahAsal: string;
  status: "Terverifikasi" | "Ditolak"; // Hanya status final
  tanggalDaftar: string;
};

type TenagaPendidik = {
  id: number;
  nama: string;
  email: string;
  pengalaman: number;
  nip: string;
  mataPelajaran: string;
  status: "Terverifikasi" | "Ditolak"; // Hanya status final
};

// --- DATA DUMMY (Hanya berisi data dengan status final) ---
const dummyPendaftarPD: PesertaDidik[] = [
  { id: 1, nama: 'Andi Pratama', email: 'andi.pratama@email.com', nisn: '1234567890', sekolahAsal: 'SMA Negeri 1 Jakarta', status: 'Terverifikasi', tanggalDaftar: '2024-01-15' },
  { id: 3, nama: 'Budi Setiawan', email: 'budi.setiawan@email.com', nisn: '1234567892', sekolahAsal: 'SMA Swasta Jakarta', status: 'Ditolak', tanggalDaftar: '2024-01-13' },
];

const dummyPesertaTendik: TenagaPendidik[] = [
    { id: 1, nama: 'Dr. Ahmad Wijaya, S.Pd', email: 'ahmad.wijaya@email.com', pengalaman: 15, nip: '198501012010011001', mataPelajaran: 'Matematika', status: 'Terverifikasi' },
    { id: 3, nama: 'Budi Santoso, S.Si', email: 'budi.santoso@email.com', pengalaman: 5, nip: '198903102012011003', mataPelajaran: 'Fisika', status: 'Ditolak' },
];

// --- KOMPONEN TABEL (Reusable) ---

// Komponen Tabel untuk Peserta Didik
const TabelPesertaDidik = ({ data }: { data: PesertaDidik[] }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Siswa</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NISN</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sekolah Asal</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((siswa) => (
          <tr key={siswa.id} className="hover:bg-gray-50">
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">{siswa.nama}</div>
              <div className="text-sm text-gray-500">{siswa.email}</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-900">{siswa.nisn}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{siswa.sekolahAsal}</td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    siswa.status === 'Terverifikasi' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {siswa.status === 'Terverifikasi' ? <CheckCircle className="w-4 h-4 mr-1.5"/> : <XCircle className="w-4 h-4 mr-1.5"/>}
                    {siswa.status}
                </span>
            </td>
            <td className="px-6 py-4 text-sm font-medium">
                <div className="flex space-x-2">
                    <Link href={`/dashboard/peserta-didik/${siswa.id}/edit`} className="text-blue-600 hover:text-blue-900 p-1"><Eye className="w-4 h-4"/></Link>
                    <button className="text-red-600 hover:text-red-900 p-1"><Trash2 className="w-4 h-4"/></button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Komponen Tabel untuk Tenaga Pendidik
const TabelTenagaPendidik = ({ data }: { data: TenagaPendidik[] }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Guru</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NIP</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mata Pelajaran</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((guru) => (
            <tr key={guru.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{guru.nama}</div>
                    <div className="text-sm text-gray-500">{guru.email}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{guru.nip}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{guru.mataPelajaran}</td>
                <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        guru.status === 'Terverifikasi' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {guru.status === 'Terverifikasi' ? <CheckCircle className="w-4 h-4 mr-1.5"/> : <XCircle className="w-4 h-4 mr-1.5"/>}
                        {guru.status}
                    </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-2">
                        <Link href={`/dashboard/tenaga-pendidik/${guru.id}/edit`} className="text-blue-600 hover:text-blue-900 p-1"><Eye className="w-4 h-4"/></Link>
                        <button className="text-red-600 hover:text-red-900 p-1"><Trash2 className="w-4 h-4"/></button>
                    </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);


// --- KOMPONEN UTAMA HALAMAN ---
const ManagePendaftaranPage = () => {
  const [activeTab, setActiveTab] = useState<'pesertaDidik' | 'tenagaPendidik'>('pesertaDidik');

  const tabStyles = "px-4 py-2 font-medium text-sm rounded-md";
  const activeTabStyles = "bg-blue-600 text-white";
  const inactiveTabStyles = "text-gray-600 hover:bg-gray-100";

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Hasil Seleksi Final</h1>
        <p className="mt-1 text-gray-600">Daftar peserta didik dan tenaga pendidik yang telah diterima atau ditolak.</p>
      </div>

      {/* Kontrol Tab */}
<div className="flex bg-white p-2 rounded-lg shadow-sm border border-gray-100 space-x-2">
  <button
    onClick={() => setActiveTab('pesertaDidik')}
    className={`${tabStyles} flex-1 justify-center ${activeTab === 'pesertaDidik' ? activeTabStyles : inactiveTabStyles}`}
  >
    <GraduationCap className="w-5 h-5 mr-2 inline-block"/>
    Peserta Didik
  </button>
  <button
    onClick={() => setActiveTab('tenagaPendidik')}
    className={`${tabStyles} flex-1 justify-center ${activeTab === 'tenagaPendidik' ? activeTabStyles : inactiveTabStyles}`}
  >
    <UserSquare className="w-5 h-5 mr-2 inline-block"/>
    Tenaga Pendidik
  </button>
</div>

      {/* Konten Tab */}
      <div className="space-y-6">
        {activeTab === 'pesertaDidik' && (
          <div className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold text-gray-700">Daftar Pendaftar</h2>
                <div className="mt-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <TabelPesertaDidik data={dummyPendaftarPD} />
                </div>
            </div>
          </div>
        )}

        {activeTab === 'tenagaPendidik' && (
           <div className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold text-gray-700">Daftar Diterima</h2>
                <div className="mt-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <TabelTenagaPendidik data={dummyPesertaTendik} />
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagePendaftaranPage;