"use client";

import { useState } from 'react';
import { Eye, Trash2, GraduationCap, UserSquare, ArrowLeft, FileText, ExternalLink, Calendar, School, BookOpen, User } from 'lucide-react';

// --- TIPE DATA ---
type Status = "Terverifikasi" | "Diterima" | "Ditolak";

type PesertaDidik = {
  id: number;
  nama: string;
  email: string;
  nisn: string;
  sekolahAsal: string;
  status: Status;
  tanggalDaftar: string;
  dokumen: string;
};

type TenagaPendidik = {
  id: number;
  nama: string;
  email: string;
  pengalaman: number;
  nip: string;
  mataPelajaran: string;
  pendidikan: string;
  dokumen: string;
  status: Status;
};


// --- KOMPONEN PREVIEW DOKUMEN ---
const DokumenPreview = ({ url, nama }: { url: string; nama: string }) => {
  const [showPreview, setShowPreview] = useState(false);

  const openInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span className="text-sm">{showPreview ? 'Sembunyikan' : 'Preview'}</span>
        </button>
        <button
          onClick={openInNewTab}
          className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">Buka</span>
        </button>
      </div>

      {showPreview && (
        <div className="border rounded-lg overflow-hidden bg-gray-50">
          <div className="p-2 bg-gray-100 border-b flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Dokumen - {nama}</span>
          </div>
          <div className="h-96">
            <iframe
              src={url}
              className="w-full h-full"
              title={`Dokumen ${nama}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// --- KOMPONEN STATUS BADGE ---
const StatusBadge = ({ status }: { status: Status }) => {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'Terverifikasi': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Diterima': return 'bg-green-100 text-green-800 border-green-200';
      case 'Ditolak': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

// --- HALAMAN DETAIL DENGAN LAYOUT ROWS ---
const DetailPendaftar = ({ data, type, onBack }: { data: any; type: 'PD' | 'TP'; onBack: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
        </button>
        <StatusBadge status={data.status} />
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            {type === 'PD' ? <GraduationCap className="w-6 h-6 mr-2" /> : <UserSquare className="w-6 h-6 mr-2" />}
            Detail {type === 'PD' ? 'Peserta Didik' : 'Tenaga Pendidik'}
          </h2>
        </div>

        <div className="p-6 space-y-4">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-600">Nama Lengkap</label>
                  <p className="text-lg font-semibold text-gray-800">{data.nama}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-5 h-5 text-gray-600 mt-1">@</div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-gray-800">{data.email}</p>
                </div>
              </div>

              {type === 'PD' ? (
                <>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 text-gray-600 mt-1">#</div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">NISN</label>
                      <p className="text-gray-800 font-mono">{data.nisn}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <School className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Sekolah Asal</label>
                      <p className="text-gray-800">{data.sekolahAsal}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Tanggal Daftar</label>
                      <p className="text-gray-800">{new Date(data.tanggalDaftar).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 text-gray-600 mt-1">#</div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">NIP</label>
                      <p className="text-gray-800 font-mono">{data.nip}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Mata Pelajaran</label>
                      <p className="text-gray-800">{data.mataPelajaran}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Pendidikan</label>
                      <p className="text-gray-800">{data.pendidikan}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 text-gray-600 mt-1">⚡</div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Pengalaman</label>
                      <p className="text-gray-800">{data.pengalaman} tahun</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Preview Dokumen */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <label className="text-sm font-medium text-gray-600">Dokumen Pendukung</label>
                </div>
                <DokumenPreview url={data.dokumen} nama={data.nama} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN TABEL ---
const Tabel = ({ data, type, onDetail, onStatusChange }: {
  data: (PesertaDidik | TenagaPendidik)[];
  type: 'PD' | 'TP';
  onDetail: (id: number) => void;
  onStatusChange: (id: number, status: Status) => void;
}) => (
  <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Nama</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">{type === 'PD' ? 'NISN' : 'NIP'}</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">{type === 'PD' ? 'Sekolah Asal' : 'Mata Pelajaran'}</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item: any) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-medium text-gray-800">{item.nama}</div>
                <div className="text-sm text-gray-500">{item.email}</div>
              </td>
              <td className="px-6 py-4 font-mono text-sm">{type === 'PD' ? item.nisn : item.nip}</td>
              <td className="px-6 py-4 text-sm">{type === 'PD' ? item.sekolahAsal : item.mataPelajaran}</td>
              <td className="px-6 py-4">
                <select
                  value={item.status}
                  onChange={(e) => onStatusChange(item.id, e.target.value as Status)}
                  className="border border-gray-300 px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Terverifikasi">Terverifikasi</option>
                  <option value="Diterima">Diterima</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onDetail(item.id)}
                    className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors"
                    title="Lihat Detail"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded transition-colors"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- KOMPONEN UTAMA ---
const DetailPendaftaranPage = () => {
  const [tab, setTab] = useState<'PD' | 'TP'>('PD');
  const [detailId, setDetailId] = useState<number | null>(null);
  // Initialize with dummy data
  const [pesertaDidik, setPesertaDidik] = useState<PesertaDidik[]>();
  const [tenagaPendidik, setTenagaPendidik] = useState<TenagaPendidik[]>();
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Implementasi fetch data dari database
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       if (tab === 'PD') {
  //         const response = await fetch('/api/peserta-didik');
  //         const data = await response.json();
  //         setPesertaDidik(data);
  //       } else {
  //         const response = await fetch('/api/tenaga-pendidik');
  //         const data = await response.json();
  //         setTenagaPendidik(data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [tab]);

  const peserta = tab === 'PD' ? pesertaDidik ?? [] : tenagaPendidik ?? [];
  const selectedData = peserta.find((p) => p.id === detailId) || null;

  const handleStatusChange = async (id: number, newStatus: Status) => {
    try {
      // TODO: Implementasi update status ke database
      // const response = await fetch(`/api/${tab === 'PD' ? 'peserta-didik' : 'tenaga-pendidik'}/${id}/status`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });
      //
      // if (response.ok) {
      //   // Update local state
      //   if (tab === 'PD') {
      //     setPesertaDidik(prev => prev.map(p => p.id === id ? {...p, status: newStatus} : p));
      //   } else {
      //     setTenagaPendidik(prev => prev.map(p => p.id === id ? {...p, status: newStatus} : p));
      //   }
      // }

      // Temporary local state update for demonstration
      if (tab === 'PD') {
        setPesertaDidik(prev => (prev ?? []).map(p => p.id === id ? { ...p, status: newStatus } : p));
      } else {
        setTenagaPendidik(prev => (prev ?? []).map(p => p.id === id ? { ...p, status: newStatus } : p));
      }
      console.log(`Update status ID ${id} menjadi ${newStatus}`);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Calculate stats based on the active tab's data
  const totalPendaftar = tab === 'PD' ? (pesertaDidik?.length ?? 0) : (tenagaPendidik?.length ?? 0);
  const verifiedCount = peserta.filter(p => p.status === 'Terverifikasi').length;
  const pendingCount = peserta.filter(p => p.status === 'Diterima').length; // Assuming 'Diterima' maps to 'pending' in the context of the provided stats
  const rejectedCount = peserta.filter(p => p.status === 'Ditolak').length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-lg border p-6">
          <h1 className="text-3xl font-bold text-gray-800">Hasil Seleksi Final</h1>
          <p className="text-gray-600 mt-2">Daftar peserta didik dan tenaga pendidik yang telah diverifikasi atau ditolak.</p>
        </div>

        {/* Tabs */}
        {!detailId && (
          <div className="flex space-x-2">
            <button
              onClick={() => setTab('PD')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                tab === 'PD'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border hover:bg-gray-50'
              }`}
            >
              <GraduationCap className="inline w-5 h-5 mr-2" />
              Peserta Didik
            </button>
            <button
              onClick={() => setTab('TP')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                tab === 'TP'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border hover:bg-gray-50'
              }`}
            >
              <UserSquare className="inline w-5 h-5 mr-2" />
              Tenaga Pendidik
            </button>
          </div>
        )}

        {/* Stats */}
        {!detailId && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">{totalPendaftar}</div>
              <div className="text-sm text-gray-600">Total Pendaftar</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-green-600">
                {verifiedCount}
              </div>
              <div className="text-sm text-gray-600">Terverifikasi</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-yellow-600">
                {pendingCount}
              </div>
              <div className="text-sm text-gray-600">Diterima</div> {/* Changed to Diterima for consistency */}
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-red-600">
                {rejectedCount}
              </div>
              <div className="text-sm text-gray-600">Ditolak</div>
            </div>
          </div>
        )}

        {/* Konten */}
        {detailId && selectedData ? (
          <DetailPendaftar data={selectedData} type={tab} onBack={() => setDetailId(null)} />
        ) : (
          <>
            {isLoading ? (
              <div className="bg-white rounded-lg border p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat data...</p>
              </div>
            ) : peserta.length === 0 ? (
              <div className="bg-white rounded-lg border p-8 text-center">
                <div className="text-gray-400 mb-4">
                  {tab === 'PD' ? <GraduationCap className="w-16 h-16 mx-auto" /> : <UserSquare className="w-16 h-16 mx-auto" />}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Belum ada data</h3>
                <p className="text-gray-600">
                  Data {tab === 'PD' ? 'peserta didik' : 'tenaga pendidik'}.
                </p>
              </div>
            ) : (
              <Tabel
                data={peserta}
                type={tab}
                onDetail={setDetailId}
                onStatusChange={handleStatusChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPendaftaranPage;