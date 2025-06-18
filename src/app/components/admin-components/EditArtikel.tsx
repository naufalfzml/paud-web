"use client";

import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Article = {
  id: number;
  judul: string;
  kategori: string;
  penulis: string;
  status: "Published" | "Draft" | "Review";
  tanggal: string;
  konten: string;
};

const dummyArticle: Article = {
  id: 1,
  judul: "Inovasi Pendidikan Digital di Era Modern",
  kategori: "Pendidikan",
  penulis: "Maya Sari",
  status: "Published",
  tanggal: "2024-01-15",
  konten: "Ini adalah isi data dummy",
};

const EditArtikelPage = ({ params }: { params: { id: string } }) => {
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    console.log("Fetching data for article ID:", params.id);
    setArticle(dummyArticle);
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (article) {
      setArticle({ ...article, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving article data:", article);
    alert("Perubahan artikel telah disimpan!");
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/dashboard/manajemen-artikel" className="hover:underline">
            Manajemen Artikel
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium text-gray-700">Edit Artikel</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard/manajemen-artikel"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Artikel</h1>
        </div>
      </div>

      {/* Form Edit */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Judul Artikel */}
          <div>
            <label
              htmlFor="judul"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Judul Artikel
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={article.judul}
              onChange={handleChange}
              className="w-full text-gray-500 focus:text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Kategori */}
            <div>
              <label
                htmlFor="kategori"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kategori
              </label>
              <input
                type="text"
                id="kategori"
                name="kategori"
                value={article.kategori}
                onChange={handleChange}
                className="w-full px-4 text-gray-500 focus:text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Input Penulis */}
            <div>
              <label
                htmlFor="penulis"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Penulis
              </label>
              <input
                type="text"
                id="penulis"
                name="penulis"
                value={article.penulis}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" // Biasanya nama penulis tidak diubah di form ini
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dropdown Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={article.status}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Review">Review</option>
              </select>
            </div>

            {/* Input Tanggal */}
            <div>
              <label
                htmlFor="tanggal"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tanggal Publikasi
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={article.tanggal}
                onChange={handleChange}
                className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Text Area Konten Artikel */}
          <div>
            <label
              htmlFor="konten"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Konten Artikel
            </label>
            <textarea
              id="konten"
              name="konten"
              value={article.konten}
              onChange={handleChange}
              rows={10}
              className="text-gray-500 focus:text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Tulis konten artikel di sini..."
            ></textarea>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan Perubahan
            </button>
            <Link href="/dashboard/manajemen-artikel">
              <button
                type="button"
                className="bg-white text-gray-700 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
              >
                Batal
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Kotak Informasi */}
      <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 max-w-4xl">
        <h4 className="font-bold mb-2">Informasi Status Artikel</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>
            <b>Published:</b> Artikel sudah terbit dan dapat dilihat oleh
            publik.
          </li>
          <li>
            <b>Draft:</b> Artikel masih dalam bentuk draf dan belum siap untuk
            dipublikasikan.
          </li>
          <li>
            <b>Review:</b> Artikel sedang dalam proses peninjauan sebelum
            dipublikasikan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditArtikelPage;
