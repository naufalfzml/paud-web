"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import withAuth from "@/lib/WithAuth";
import { supabase } from "@/lib/supabase";

function FormPendaftaran() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    alamat: "",
    ttl: "",
    namaWali: "",
    noHpWali: "",
    jenis_kelamin: "",
    formUrl: "", // Untuk menyimpan URL PDF yang diupload
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Validasi di frontend sebelum kirim
      if (
        !formData.fullName ||
        !formData.alamat ||
        !formData.ttl ||
        !formData.namaWali ||
        !formData.noHpWali ||
        !formData.jenis_kelamin
      ) {
        setMessage("Semua field wajib harus diisi");
        setMessageType("error");
        setLoading(false);
        return;
      }

      // Validasi format nomor HP
      const phoneRegex = /^[0-9+\-\s()]+$/;
      if (!phoneRegex.test(formData.noHpWali)) {
        setMessage("Format nomor HP tidak valid");
        setMessageType("error");
        setLoading(false);
        return;
      }

      const ttlRegex =
        /^[A-Za-z\s]+,\s\d{1,2}\s(Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember)\s\d{4}$/;
      if (!ttlRegex.test(formData.ttl)) {
        setMessage("Format TTL tidak valid. Contoh: Jakarta, 15 Januari 2010");
        setMessageType("error");
        setLoading(false);
        return;
      }

      // Log user info for debugging
      console.log("Submitting form with user:", {
        userId: user?.id,
        email: user?.email,
        hasUser: !!user,
      });

      const response = await fetch("/api/pendaftar-peserta-didik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...formData, userId: user?.id }),
      });

      const result = await response.json();

      console.log("API Response:", {
        status: response.status,
        result,
      });

      if (response.ok) {
        setMessage("Pendaftaran berhasil!");
        setMessageType("success");
        setFormData({
          fullName: "",
          alamat: "",
          ttl: "",
          namaWali: "",
          noHpWali: "",
          jenis_kelamin: "",
          formUrl: "",
        });
      } else {
        setMessage(result.error || "Terjadi kesalahan");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Terjadi kesalahan koneksi");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi tipe file - hanya PDF
    if (file.type !== "application/pdf") {
      setError("Hanya file PDF yang diperbolehkan");
      setMessage("Hanya file PDF yang diperbolehkan");
      setMessageType("error");
      return;
    }

    // Validasi ukuran file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran file terlalu besar. Maksimal 5MB.');
      setMessage('Ukuran file terlalu besar. Maksimal 5MB.');
      setMessageType("error");
      return;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `documents/${fileName}`; // Ganti folder menjadi documents untuk PDF

    setIsUploading(true);
    setError(''); // Clear error sebelum upload
    setMessage(''); // Clear message sebelum upload

    try {
      const { data, error } = await supabase.storage
        .from('pesertadidik') // Pastikan bucket ini sudah dibuat di Supabase
        .upload(filePath, file);

      if (error) {
        console.error('Upload error:', error.message);
        setError('Gagal mengupload file: ' + error.message);
        setMessage('Gagal mengupload file: ' + error.message);
        setMessageType("error");
        return;
      }

      const { data: publicUrlData } = supabase
        .storage
        .from('pesertadidik')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        setFormData(prev => ({
          ...prev,
          formUrl: publicUrlData.publicUrl // Simpan ke formUrl bukan imageUrl
        }));
        setError(''); // Clear error jika berhasil
        setMessage('File PDF berhasil diupload!');
        setMessageType("success");
      }
    } catch (err: any) {
      console.error('Unexpected upload error:', err);
      setError('Terjadi kesalahan tidak terduga saat upload file.');
      setMessage('Terjadi kesalahan tidak terduga saat upload file.');
      setMessageType("error");
    } finally {
      setIsUploading(false);
    }
  };

  // Loading state saat auth masih loading
  if (authLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

    // Not authenticated
  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-yellow-100 text-yellow-700 border border-yellow-300 p-3 rounded-md">
          <p>Silakan login terlebih dahulu untuk mengakses form pendaftaran.</p>
          <p className="text-sm mt-1">Status: User tidak terdeteksi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {message && (
        <div
          className={`mb-4 p-3 rounded-md ${
            messageType === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama lengkap siswa"
          />
        </div>

        <div>
          <label
            htmlFor="jenis_kelamin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Jenis Kelamin <span className="text-red-500">*</span>
          </label>
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
            value={formData.jenis_kelamin}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Dokumen PDF <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-black disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <p className="text-sm text-gray-500 mt-1">
            Hanya file PDF dengan ukuran maksimal 5MB
          </p>
          {isUploading && (
            <div className="mt-2 flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <span className="text-sm text-gray-600">Mengupload file...</span>
            </div>
          )}
          {formData.formUrl && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-green-700 font-medium">File PDF berhasil diupload</span>
              </div>
              <a 
                href={formData.formUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 underline mt-1 inline-block"
              >
                Lihat file yang diupload
              </a>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Alamat <span className="text-red-500">*</span>
          </label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
            rows={3}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder="Masukkan alamat lengkap"
          />
        </div>

        <div>
          <label
            htmlFor="ttl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tempat, Tanggal Lahir <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="ttl"
            name="ttl"
            value={formData.ttl}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contoh: Jakarta, 15 Januari 2010"
          />
        </div>

        <div>
          <label
            htmlFor="namaWali"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Wali <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="namaWali"
            name="namaWali"
            value={formData.namaWali}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama lengkap wali"
          />
        </div>

        <div>
          <label
            htmlFor="noHpWali"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            No. HP Wali <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="noHpWali"
            name="noHpWali"
            value={formData.noHpWali}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contoh: 08123456789"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          } text-white`}
        >
          {loading ? "Mendaftar..." : "Daftar Sekarang"}
        </button>
      </form>
    </div>
  );
}

export default withAuth(FormPendaftaran);