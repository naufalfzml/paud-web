"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";

interface KritikSaran {
  id: string;
  kritik: string;
  saran: string;
  createdAt: string;
  User: {
    name: string;
  };
}

const Modal = ({
  item,
  onClose,
}: {
  item: KritikSaran;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h3 className="text-2xl font-bold mb-4">Detail Kritik & Saran</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-900">Nama Pengirim:</p>
            <p className="text-gray-800">{item.User.name}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Tanggal Kirim:</p>
            <p className="text-gray-800">
              {new Date(item.createdAt).toLocaleString("id-ID")}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Kritik:</p>
            <p className="text-gray-800 bg-gray-100 p-3 rounded-md whitespace-pre-wrap">
              {item.kritik}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Saran:</p>
            <p className="text-gray-800 bg-gray-100 p-3 rounded-md whitespace-pre-wrap">
              {item.saran}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

const ManageKritikSaran = () => {
  const [kritikSaranList, setKritikSaranList] = useState<KritikSaran[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<KritikSaran | null>(null);

  useEffect(() => {
    const fetchKritikSaran = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/kritik-saran");
        if (!res.ok) throw new Error("Gagal mengambil data");
        const data = await res.json();
        setKritikSaranList(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchKritikSaran();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
      try {
        const res = await fetch(`/api/kritik-saran/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Gagal menghapus pesan");
        setKritikSaranList(kritikSaranList.filter((item) => item.id !== id));
        alert("Pesan berhasil dihapus");
      } catch (err: any) {
        alert(`Error: ${err.message}`);
      }
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Data Kritik & Saran
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-400">
            <tr>
              <th className="py-2 px-4 border-b text-gray-900">No</th>
              <th className="py-2 px-4 border-b text-left text-gray-900">
                Nama Pengirim
              </th>
              <th className="py-2 px-4 border-b text-left text-gray-900">
                Tanggal
              </th>
              <th className="py-2 px-4 border-b text-left text-gray-900">
                Kritik
              </th>
              <th className="py-2 px-4 border-b text-left text-gray-900">
                Saran
              </th>
              <th className="py-2 px-4 border-b text-center text-gray-900">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {kritikSaranList.length > 0 ? (
              kritikSaranList.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b text-center text-gray-900">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-900">
                    {item.User.name}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-900">
                    {new Date(item.createdAt).toLocaleDateString("id-ID")}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-900">
                    {item.kritik}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-900">
                    {item.saran}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Hapus"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-4 px-4 border-b text-center">
                  Tidak ada data kritik dan saran.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ManageKritikSaran;
