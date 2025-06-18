"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/AuthContext";

export default function FormKritikSaran() {
  const { user } = useAuth();
  const [kritik, setKritik] = useState("");
  const [saran, setSaran] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert("Silakan login terlebih dahulu untuk mengirim kritik atau saran.");
      return;
    }

    if (!kritik.trim() && !saran.trim()) {
      alert("Silakan isi kritik atau saran terlebih dahulu.");
      return;
    }

    try {
      const response = await fetch("/api/kritik-saran", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kritik,
          saran,
          userId: user.id,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || "Terjadi kesalahan.");
        return;
      }

      setKritik("");
      setSaran("");
      alert("Terima kasih atas kritik dan sarannya!");
    } catch (err) {
      alert("Gagal mengirim data. Silakan coba lagi.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Kritik & Saran
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Pendapat Anda sangat berarti bagi kami. Silakan tuliskan kritik atau
          saran Anda di bawah ini untuk PAUD Cahya Indria.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="kritik"
              className="block text-sm font-medium text-gray-700"
            >
              Kritik
            </label>
            <textarea
              id="kritik"
              rows={2}
              value={kritik}
              onChange={(e) => setKritik(e.target.value)}
              placeholder="Tulis kritik Anda di sini..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="saran"
              className="block text-sm font-medium text-gray-700"
            >
              Saran
            </label>
            <textarea
              id="saran"
              rows={2}
              value={saran}
              onChange={(e) => setSaran(e.target.value)}
              placeholder="Tulis saran Anda di sini..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-black"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-3 rounded-2xl hover:bg-pink-600 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
