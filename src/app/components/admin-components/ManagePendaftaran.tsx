"use client";

import { useState, useEffect, FC, ChangeEvent } from 'react';
import { Eye, Trash2, GraduationCap, UserSquare, ArrowLeft, FileText, ExternalLink, Calendar, BookOpen, User, Phone, MapPin, Users, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

// --- TYPE DEFINITIONS ---
// Frontend-facing status labels
type FeStatus = "Menunggu Verifikasi" | "Telah Diverifikasi" | "Diterima" | "Ditolak";
// Backend status values
type DbStatus = "MENUNGGU VERIFIKASI" | "TELAH DIVERIFIKASI" | "DITERIMA" | "DITOLAK";

type PesertaDidik = {
  id: number;
  fullName: string;
  alamat: string;
  program: string;
  ttl: string;
  namaWali: string;
  noHpWali: string;
  jenis_kelamin: string;
  formUrl?: string;
  userId: string;
  status: DbStatus;
  createdAt: string;
};

type TenagaPendidik = {
  id: number;
  fullName: string;
  alamat: string;
  ttl: string;
  noHp: string;
  email: string;
  jenis_kelamin: string;
  pendidikan_terakhir: string;
  alasan_melamar: string;
  userId: string;
  status: DbStatus;
  createdAt: string;
};

type NotificationType = {
  message: string;
  type: 'success' | 'error';
};

// --- STATUS MAPPING UTILITIES ---
const dbToFeStatusMap: Record<DbStatus, FeStatus> = {
 "MENUNGGU VERIFIKASI": "Menunggu Verifikasi",
 "TELAH DIVERIFIKASI": "Telah Diverifikasi",
 "DITERIMA": "Diterima",
 "DITOLAK": "Ditolak",
};

const feToDbStatusMap: Record<FeStatus, DbStatus> = {
  "Menunggu Verifikasi": "MENUNGGU VERIFIKASI",
  "Telah Diverifikasi": "TELAH DIVERIFIKASI",
  "Diterima": "DITERIMA",
  "Ditolak": "DITOLAK",
};

const allFeStatuses: FeStatus[] = ["Menunggu Verifikasi", "Telah Diverifikasi", "Diterima", "Ditolak"];

// --- UI COMPONENTS ---

const Notification: FC<{ notification: NotificationType | null, onDismiss: () => void }> = ({ notification, onDismiss }) => {
  if (!notification) return;

  const isSuccess = notification.type === 'success';
  const bgColor = isSuccess ? 'bg-green-100' : 'bg-red-100';
  const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
  const Icon = isSuccess ? CheckCircle : XCircle;

  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  return (
    <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg flex items-center ${bgColor} ${textColor} z-50`}>
      <Icon className="w-5 h-5 mr-3" />
      <span>{notification.message}</span>
      <button onClick={onDismiss} className="ml-4 text-lg font-bold">&times;</button>
    </div>
  );
};


const DeleteConfirmationModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}> = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm w-full">
        <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800">Konfirmasi Hapus</h2>
            <p className="text-gray-600 mt-2">
                Apakah Anda yakin ingin menghapus data pendaftar: <br/>
                <strong className="font-semibold">{itemName}</strong>?
            </p>
            <p className="text-sm text-red-600 mt-2">Tindakan ini tidak dapat dibatalkan.</p>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};


const StatusBadge: FC<{ status: DbStatus }> = ({ status }) => {
  const getStatusColor = (s: DbStatus) => {
    switch (s) {
      case 'MENUNGGU VERIFIKASI': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'TELAH DIVERIFIKASI': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DITERIMA': return 'bg-green-100 text-green-800 border-green-200';
      case 'DITOLAK': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(status)}`}>
      {dbToFeStatusMap[status] || status}
    </span>
  );
};

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
                  <p className="text-lg font-semibold text-gray-800">{data.fullName}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-600">Alamat</label>
                  <p className="text-gray-800">{data.alamat}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-600">Tempat, Tanggal Lahir</label>
                  <p className="text-gray-800">{data.ttl}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-5 h-5 text-gray-600 mt-1">👤</div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Jenis Kelamin</label>
                  <p className="text-gray-800">{data.jenis_kelamin}</p>
                </div>
              </div>

              {type === 'PD' ? (
                <>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nama Wali</label>
                      <p className="text-gray-800">{data.namaWali}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">No. HP Wali</label>
                      <p className="text-gray-800">{data.noHpWali}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Tanggal Daftar</label>
                      <p className="text-gray-800">{new Date(data.createdAt).toLocaleDateString('id-ID', {
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
                    <div className="w-5 h-5 text-gray-600 mt-1">@</div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-800">{data.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">No. HP</label>
                      <p className="text-gray-800">{data.noHp}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Pendidikan Terakhir</label>
                      <p className="text-gray-800">{data.pendidikan_terakhir}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-600">Alasan Melamar</label>
                      <p className="text-gray-800">{data.alasan_melamar}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Preview Dokumen - hanya untuk Peserta Didik yang memiliki formUrl */}
            {type === 'PD' && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <label className="text-sm font-medium text-gray-600">Dokumen Pendukung</label>
                  </div>
                  {/* <DokumenPreview url={data.formUrl} nama={data.fullName} /> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



const Tabel: FC<{
  data: (PesertaDidik | TenagaPendidik)[];
  type: 'PD' | 'TP';
  onDetail: (id: number) => void;
  onStatusChange: (id: number, newStatus: DbStatus) => void;
  onDelete: (id: number, name: string) => void;
}> = ({ data, type, onDetail, onStatusChange, onDelete }) => (
  <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-black">Nama</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-black">Alamat</th>
            {type === 'PD' && (
              <th className="px-6 py-4 text-left text-sm font-medium text-black">
                Program
              </th>
            )}
            <th className="px-6 py-4 text-left text-sm font-medium text-black">{type === 'PD' ? 'Nama Wali' : 'Email'}</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-black">Status</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-black">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item: any) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-medium text-black">{item.fullName}</div>
                <div className="text-sm text-gray-700">{item.ttl}</div>
              </td>
              <td className="px-6 py-4 text-sm text-black max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{item.alamat}</td>
              {type ==='PD' && (
                <td className="px-6 py-4 text-sm max-w-xs truncate text-black">{item.program}</td>
              )}
              <td className="px-6 py-4 text-sm text-black">{type === 'PD' ? item.namaWali : item.email}</td>
              <td className="px-6 py-4">
                <select
                  value={item.status}
                  onChange={(e) => onStatusChange(item.id, e.target.value as DbStatus)}
                  className={`font-medium text-black w-full p-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500
                    ${item.status === 'MENUNGGU VERIFIKASI' ? 'bg-yellow-100 text-yellow-800' :
                      item.status === 'TELAH DIVERIFIKASI' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'DITERIMA' ? 'bg-green-100 text-green-800' :
                      item.status === 'DITOLAK' ? 'bg-red-100 text-red-800' : ''}`}
                >
                  {allFeStatuses.map(feStatus => {
                    const dbStatus = feToDbStatusMap[feStatus];
                    return (
                      <option key={dbStatus} value={dbStatus}>
                        {feStatus}
                      </option>
                    );
                  })}
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
                    onClick={() => onDelete(item.id, item.fullName)}
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



// --- MAIN PAGE COMPONENT ---
const DetailPendaftaranPage = () => {
  const [tab, setTab] = useState<'PD' | 'TP'>('PD');
  const [detailId, setDetailId] = useState<number | null>(null);
  const [pesertaDidik, setPesertaDidik] = useState<PesertaDidik[]>([]);
  const [tenagaPendidik, setTenagaPendidik] = useState<TenagaPendidik[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; name: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const endpoint = tab === 'PD' ? '/api/pendaftar-peserta-didik' : '/api/pendaftar-tenaga-pendidik';
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.error || 'Gagal mengambil data');
        }
        
        if (tab === 'PD') {
          setPesertaDidik(result.data || []);
        } else {
          setTenagaPendidik(result.data || []);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [tab]);

  const handleStatusUpdate = async (id: number, newStatus: DbStatus) => {
    const endpoint = tab === 'PD' ? '/api/pendaftar-peserta-didik' : '/api/pendaftar-tenaga-pendidik';
    
    const updater = (setter: React.Dispatch<React.SetStateAction<any[]>>) => {
        setter(prev => prev.map(p => (p.id === id ? { ...p, status: newStatus } : p)));
    };
    const oldPesertaDidik = [...pesertaDidik];
    const oldTenagaPendidik = [...tenagaPendidik];
    updater(tab === 'PD' ? setPesertaDidik : setTenagaPendidik);

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Gagal mengupdate status');

      setNotification({ message: 'Status berhasil diupdate!', type: 'success' });
    } catch (err: any) {
      setNotification({ message: err.message, type: 'error' });
      // Revert UI on failure
      if (tab === 'PD') setPesertaDidik(oldPesertaDidik);
      else setTenagaPendidik(oldTenagaPendidik);
    }
  };

  const handleDeleteClick = (id: number, name: string) => {
    setDeleteTarget({ id, name });
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    const endpoint = tab === 'PD' 
        ? `/api/pendaftar-peserta-didik?id=${deleteTarget.id}` 
        : `/api/pendaftar-tenaga-pendidik?id=${deleteTarget.id}`;

    try {
      const response = await fetch(endpoint, { method: 'DELETE' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Gagal menghapus data');

      const updater = (setter: React.Dispatch<React.SetStateAction<any[]>>) => {
          setter(prev => prev.filter(p => p.id !== deleteTarget.id));
      };
      updater(tab === 'PD' ? setPesertaDidik : setTenagaPendidik);
      
      if (detailId === deleteTarget.id) setDetailId(null);
      
      setNotification({ message: `Data "${deleteTarget.name}" berhasil dihapus.`, type: 'success' });
    } catch (err: any) {
      setNotification({ message: err.message, type: 'error' });
    } finally {
      setShowDeleteModal(false);
      setDeleteTarget(null);
    }
  };
  
  const peserta = tab === 'PD' ? pesertaDidik : tenagaPendidik;
  const selectedData = peserta.find((p) => p.id === detailId) || null;
  
  // Calculate stats
  const totalPendaftar = peserta.length;
  const pendingCount = peserta.filter(p => p.status === 'MENUNGGU VERIFIKASI').length;
  const verifiedCount = peserta.filter(p => p.status === 'TELAH DIVERIFIKASI').length;
  const acceptedCount = peserta.filter(p => p.status === 'DITERIMA').length;
  const rejectedCount = peserta.filter(p => p.status === 'DITOLAK').length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Notification notification={notification} onDismiss={() => setNotification(null)} />
      <DeleteConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          itemName={deleteTarget?.name || ''}
      />

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-lg border p-6">
          <h1 className="text-3xl font-bold text-gray-800">Data Pendaftaran</h1>
          <p className="text-gray-600 mt-2">Daftar peserta didik dan tenaga pendidik yang telah mendaftar.</p>
        </div>

        {/* Tabs */}
        {!detailId && (
            // Your Tabs section code here...
             <div className="flex space-x-2">
                 <button
                     onClick={() => setTab('PD')}
                     className={`px-6 py-3 rounded-lg font-medium transition-colors ${tab === 'PD' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
                 >
                     <GraduationCap className="inline w-5 h-5 mr-2" /> Peserta Didik
                 </button>
                 <button
                     onClick={() => setTab('TP')}
                     className={`px-6 py-3 rounded-lg font-medium transition-colors ${tab === 'TP' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
                 >
                     <UserSquare className="inline w-5 h-5 mr-2" /> Tenaga Pendidik
                 </button>
             </div>
        )}

        {/* Stats */}
        {!detailId && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                 <div className="bg-white rounded-xl p-4 shadow-sm border"><div className="text-2xl font-bold text-blue-600">{totalPendaftar}</div><div className="text-sm text-gray-600">Total</div></div>
                 <div className="bg-white rounded-xl p-4 shadow-sm border"><div className="text-2xl font-bold text-yellow-600">{pendingCount}</div><div className="text-sm text-gray-600">Menunggu Verifikasi</div></div>
                 <div className="bg-white rounded-xl p-4 shadow-sm border"><div className="text-2xl font-bold text-blue-500">{verifiedCount}</div><div className="text-sm text-gray-600">Telah Diverifikasi</div></div>
                 <div className="bg-white rounded-xl p-4 shadow-sm border"><div className="text-2xl font-bold text-green-600">{acceptedCount}</div><div className="text-sm text-gray-600">Diterima</div></div>
                 <div className="bg-white rounded-xl p-4 shadow-sm border"><div className="text-2xl font-bold text-red-600">{rejectedCount}</div><div className="text-sm text-gray-600">Ditolak</div></div>
            </div>
        )}

        {/* Content */}
        {detailId && selectedData ? (
          <DetailPendaftar data={selectedData} type={tab} onBack={() => setDetailId(null)} />
        ) : (
          <>
            {isLoading && <p>Memuat data...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && peserta.length === 0 && <p>Belum ada pendaftar.</p>}
            {!isLoading && !error && peserta.length > 0 && (
              <Tabel
                data={peserta}
                type={tab}
                onDetail={setDetailId}
                onStatusChange={handleStatusUpdate}
                onDelete={handleDeleteClick}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPendaftaranPage;