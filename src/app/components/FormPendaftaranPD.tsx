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
    formUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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

    if (file.type !== "application/pdf") {
      setMessage("Hanya file PDF yang diperbolehkan");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from("formulir") // nama bucket kamu di Supabase
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      const { data: publicUrlData } = supabase.storage
        .from("formulir")
        .getPublicUrl(fileName);

      setFormData((prev) => ({
        ...prev,
        formUrl: publicUrlData.publicUrl,
      }));

      setMessage("File berhasil di-upload");
      setMessageType("success");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Gagal mengupload file");
      setMessageType("error");
    } finally {
      setLoading(false);
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
          <label
            htmlFor="formUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Formulir (PDF) <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            //required
            onChange={handleFileUpload}
            className="text-black w-full"
          />
          {formData.formUrl && (
            <p className="text-sm text-green-700 mt-1">
              File berhasil di-upload:{" "}
              <a
                href={formData.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Lihat file
              </a>
            </p>
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
