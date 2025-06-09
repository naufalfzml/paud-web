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
    formulir: "",
    suratPernyataan: "",
    program: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

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
          formulir: "",
          suratPernyataan: "",
          program: "",
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

  const handleFileUploadSuratPernyataan = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      setError("Ukuran file terlalu besar. Maksimal 5MB.");
      setMessage("Ukuran file terlalu besar. Maksimal 5MB.");
      setMessageType("error");
      return;
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `suratpernyataan/${fileName}`; // Ganti folder menjadi documents untuk PDF

    setIsUploading(true);
    setError(""); // Clear error sebelum upload
    setMessage(""); // Clear message sebelum upload

    try {
      const { data, error } = await supabase.storage
        .from("pesertadidik") // Pastikan bucket ini sudah dibuat di Supabase
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error.message);
        setError("Gagal mengupload file: " + error.message);
        setMessage("Gagal mengupload file: " + error.message);
        setMessageType("error");
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("pesertadidik")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        setFormData((prev) => ({
          ...prev,
          suratPernyataan: publicUrlData.publicUrl,
        }));
        setError(""); // Clear error jika berhasil
        setMessage("File PDF berhasil diupload!");
        setMessageType("success");
      }
    } catch (err: any) {
      console.error("Unexpected upload error:", err);
      setError("Terjadi kesalahan tidak terduga saat upload file.");
      setMessage("Terjadi kesalahan tidak terduga saat upload file.");
      setMessageType("error");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUploadFormulir = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      setError("Ukuran file terlalu besar. Maksimal 5MB.");
      setMessage("Ukuran file terlalu besar. Maksimal 5MB.");
      setMessageType("error");
      return;
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `formulir/${fileName}`; // Ganti folder menjadi documents untuk PDF

    setIsUploading(true);
    setError(""); // Clear error sebelum upload
    setMessage(""); // Clear message sebelum upload

    try {
      const { data, error } = await supabase.storage
        .from("pesertadidik") // Pastikan bucket ini sudah dibuat di Supabase
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error.message);
        setError("Gagal mengupload file: " + error.message);
        setMessage("Gagal mengupload file: " + error.message);
        setMessageType("error");
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("pesertadidik")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        setFormData((prev) => ({
          ...prev,
          formulir: publicUrlData.publicUrl,
        }));
        setError(""); // Clear error jika berhasil
        setMessage("File PDF berhasil diupload!");
        setMessageType("success");
      }
    } catch (err: any) {
      console.error("Unexpected upload error:", err);
      setError("Terjadi kesalahan tidak terduga saat upload file.");
      setMessage("Terjadi kesalahan tidak terduga saat upload file.");
      setMessageType("error");
    } finally {
      setIsUploading(false);
    }
  };

  // Loading state saat auth masih loading
  if (authLoading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-300 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold">
                    Silakan login terlebih dahulu untuk mengakses form
                    pendaftaran.
                  </p>
                  <p className="text-sm mt-1 opacity-80">
                    Status: User tidak terdeteksi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
      <div
        className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-5 h-5 bg-pink-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 bg-clip-text text-transparent mb-4">
            Form Pendaftaran Peserta Didik
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lengkapi formulir di bawah ini dengan data yang akurat untuk memulai
            proses pendaftaran
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r via-blue-200 from-blue-500 to-blue-500 h-2"></div>

          <div className="p-8 lg:p-12">
            {message && (
              <div
                className={`mb-8 p-4 rounded-xl border-l-4 ${
                  messageType === "success"
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-green-400 shadow-green-100"
                    : "bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border-red-400 shadow-red-100"
                } shadow-lg`}
              >
                <div className="flex items-center space-x-3">
                  {messageType === "success" ? (
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  <span className="font-medium">{message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Informasi Pribadi
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="group">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Masukkan nama lengkap siswa"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="jenis_kelamin"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        value={formData.jenis_kelamin}
                        onChange={handleChange}
                        required
                        className="text-gray-700 w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm appearance-none"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="ttl"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Tempat, Tanggal Lahir{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="ttl"
                        name="ttl"
                        value={formData.ttl}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Contoh: Jakarta, 15 Januari 2010"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="program"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Program <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="text-gray-700 w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm appearance-none"
                      >
                        <option value="">Pilih Program</option>
                        <option value="Regular">Regular</option>
                        <option value="Fullday Paket A">Fullday Paket A</option>
                        <option value="Fullday Paket B">Fullday Paket B</option>
                        <option value="Fullday Paket C">Fullday Paket C</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="alamat"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Alamat <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm resize-vertical"
                      placeholder="Masukkan alamat lengkap"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Guardian Information Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-green-600 to-green-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Informasi Wali
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="group">
                    <label
                      htmlFor="namaWali"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Wali <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="namaWali"
                        name="namaWali"
                        value={formData.namaWali}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Masukkan nama lengkap wali"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="noHpWali"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      No. HP Wali <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="noHpWali"
                        name="noHpWali"
                        value={formData.noHpWali}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Contoh: 08123456789"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-purple-600 to-purple-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Dokumen Pendukung
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  {/* Formulir Upload */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Upload Formulir <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-dashed border-purple-200 group-hover:border-purple-300 transition-all duration-200">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full mb-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <a
                          href="https://yvixnhiybrgmxfywqjzu.supabase.co/storage/v1/object/public/formulir/Surat%20Pernyataan%20Ortu.docx"
                          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-200"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-4 h-4 ml-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>Download template di sini</span>
                        </a>
                      </div>

                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleFileUploadFormulir}
                        disabled={isUploading}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed bg-white/70 hover:bg-white/90 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
                      />

                      <p className="text-sm text-gray-500 mt-3 text-center">
                        Hanya file PDF dengan ukuran maksimal 5MB
                      </p>

                      {isUploading && (
                        <div className="mt-4 flex items-center justify-center space-x-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
                          <span className="text-sm text-purple-600 font-medium">
                            Mengupload file...
                          </span>
                        </div>
                      )}

                      {formData.formulir && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                          <div className="flex items-center space-x-3 mb-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm text-green-700 font-semibold">
                              File PDF berhasil diupload
                            </span>
                          </div>
                          <a
                            href={formData.formulir}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            <span>Lihat file yang diupload</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Surat Pernyataan Upload */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Upload Surat Pernyataan Orang Tua{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-dashed border-blue-200 group-hover:border-blue-300 transition-all duration-200">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full mb-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <a
                          href="https://yvixnhiybrgmxfywqjzu.supabase.co/storage/v1/object/public/formulir/Surat%20Pernyataan%20Ortu.docx"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-4 h-4 ml-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>Download template di sini</span>
                        </a>
                      </div>

                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleFileUploadSuratPernyataan}
                        disabled={isUploading}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed bg-white/70 hover:bg-white/90 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                      />

                      <p className="text-sm text-gray-500 mt-3 text-center">
                        Hanya file PDF dengan ukuran maksimal 5MB
                      </p>

                      {isUploading && (
                        <div className="mt-4 flex items-center justify-center space-x-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                          <span className="text-sm text-blue-600 font-medium">
                            Mengupload file...
                          </span>
                        </div>
                      )}

                      {formData.suratPernyataan && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                          <div className="flex items-center space-x-3 mb-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm text-green-700 font-semibold">
                              File PDF berhasil diupload
                            </span>
                          </div>
                          <a
                            href={formData.suratPernyataan}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            <span>Lihat file yang diupload</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`group relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed scale-95"
                      : "bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 hover:from-orange-700 hover:via-orange-700 hover:to-orange-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 active:scale-95"
                  } text-white shadow-xl`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Mendaftar...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        <span>Daftar Sekarang</span>
                      </>
                    )}
                  </div>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <p className="text-gray-500 text-sm">
            Pastikan semua data yang dimasukkan sudah benar sebelum mengirim
            formulir
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(FormPendaftaran);
