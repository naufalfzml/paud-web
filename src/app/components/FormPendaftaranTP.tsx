"use client";

import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import withAuth from "@/lib/WithAuth";
import { supabase } from "@/lib/supabase";

function FormPendaftaran() {
  const { user, loading: authLoading } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    alamat: "",
    ttl: "",
    email: "",
    noHp: "",
    jenis_kelamin: "",
    pendidikan_terakhir: "",
    alasan_melamar: "",
    cvUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isUploading, setIsUploading] = useState(false);

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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setMessage("Hanya file PDF yang diperbolehkan");
      setMessageType("error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Ukuran file terlalu besar. Maksimal 5MB.");
      setMessageType("error");
      return;
    }

    setIsUploading(true);
    setMessage("");

    try {
      const fileName = `cv/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("tenagapendidik")
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      const { data: publicUrlData } = supabase.storage
        .from("tenagapendidik")
        .getPublicUrl(fileName);

      setFormData((prev) => ({
        ...prev,
        cvUrl: publicUrlData.publicUrl,
      }));

      setMessage("File CV berhasil di-upload!");
      setMessageType("success");
    } catch (error: any) {
      console.error("Upload error:", error);
      setMessage("Gagal mengupload file: " + error.message);
      setMessageType("error");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const requiredFields = [
      "fullName",
      "alamat",
      "ttl",
      "email",
      "noHp",
      "pendidikan_terakhir",
      "jenis_kelamin",
      "alasan_melamar",
      "cvUrl",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        setMessage(`Field wajib '${field.replace("_", " ")}' harus diisi`);
        setMessageType("error");
        setLoading(false);
        return;
      }
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(formData.noHp)) {
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

    try {
      const response = await fetch("/api/pendaftar-tenaga-pendidik", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...formData, userId: user?.id }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Pendaftaran berhasil dikirim!");
        setMessageType("success");
        setFormData({
          fullName: "",
          alamat: "",
          ttl: "",
          email: "",
          noHp: "",
          jenis_kelamin: "",
          pendidikan_terakhir: "",
          alasan_melamar: "",
          cvUrl: "",
        });
      } else {
        setMessage(result.error || "Terjadi kesalahan saat pendaftaran");
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

  if (authLoading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                    Silakan login terlebih dahulu untuk mengakses form ini.
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
    <div className="relative min-h-screen bg-blue-50 rounded-2xl p-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-400 via-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 bg-clip-text text-transparent mb-4">
            Form Lamaran Tenaga Pendidik
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lengkapi formulir di bawah untuk mengajukan lamaran pekerjaan.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
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
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-500 to-blue-800 rounded-full">
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
                    Informasi Pelamar
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  {/* Nama Lengkap */}
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
                        placeholder="Masukkan nama lengkap"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Jenis Kelamin */}
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
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
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

                {/* TTL */}
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
                      placeholder="Contoh: Jakarta, 15 Januari 1995"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                  </div>
                </div>

                {/* Alamat */}
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
                      rows={3}
                      className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm resize-vertical"
                      placeholder="Masukkan alamat lengkap"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Contact & Qualification Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 via-green-500 to-green-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Kontak & Kualifikasi
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="user@example.com"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>
                  {/* No HP */}
                  <div className="group">
                    <label
                      htmlFor="noHp"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      No. HP / WA Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="noHp"
                        name="noHp"
                        value={formData.noHp}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                        placeholder="08123456789"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Pendidikan Terakhir */}
                <div className="group">
                  <label
                    htmlFor="pendidikan_terakhir"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Pendidikan Terakhir <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="pendidikan_terakhir"
                      name="pendidikan_terakhir"
                      value={formData.pendidikan_terakhir}
                      onChange={handleChange}
                      required
                      className="text-gray-700 w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm appearance-none"
                    >
                      <option value="">-- Pilih Pendidikan Terakhir --</option>
                      <option value="SMA / SMK / MA / Sederajat">
                        SMA / SMK / MA / Sederajat
                      </option>
                      <option value="D3">D3</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-purple-500 to-purple-800 rounded-full">
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
                    Dokumen Lamaran
                  </h2>
                </div>

                {/* CV Upload */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Upload CV (Curriculum Vitae){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-dashed border-purple-200 group-hover:border-purple-300 transition-all duration-200">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,application/pdf"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed bg-white/70 hover:bg-white/90 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
                    />
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      Hanya file PDF dengan ukuran maksimal 5MB.
                    </p>
                    {isUploading && (
                      <div className="mt-4 flex items-center justify-center space-x-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
                        <span className="text-sm text-purple-600 font-medium">
                          Mengupload file...
                        </span>
                      </div>
                    )}
                    {formData.cvUrl && !isUploading && (
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
                            File CV berhasil diupload
                          </span>
                        </div>
                        <a
                          href={formData.cvUrl}
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

                {/* Alasan Melamar */}
                <div className="group">
                  <label
                    htmlFor="alasan_melamar"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Alasan Melamar <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="alasan_melamar"
                      name="alasan_melamar"
                      rows={4}
                      value={formData.alasan_melamar}
                      onChange={handleChange}
                      required
                      className="text-black w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 bg-white/50 backdrop-blur-sm resize-vertical"
                      placeholder="Jelaskan mengapa Anda tertarik dengan posisi ini..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={loading || isUploading}
                  className={`group relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                    loading || isUploading
                      ? "bg-gray-400 cursor-not-allowed scale-95"
                      : "bg-orange-600 hover:bg-orange-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 active:scale-95"
                  } text-white shadow-xl`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Mengirim Lamaran...</span>
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
                        <span>Kirim Lamaran</span>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-500 text-sm">
            Pastikan semua data yang dimasukkan sudah benar sebelum mengirim
            lamaran.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(FormPendaftaran);
