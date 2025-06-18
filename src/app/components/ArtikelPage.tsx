"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Artikel {
  id: number;
  judul: string;
  content: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  deskripsiSingkat: string;
  author: string;
}

const ArtikelPage = () => {
  const [artikels, setArtikels] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    const fetchArtikels = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/artikel?published=true");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Artikel[] = await response.json();
        setArtikels(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Gagal mengambil data artikel";
        console.error("Error fetching artikels:", errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikels();
  }, []);

  const LoadingSkeleton = () => (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse">
      <div className="rounded-t-lg w-full h-48 bg-gray-300"></div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-10 bg-gray-300 rounded mb-3"></div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-card-belajar py-16 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Artikel Terbaru
            </h2>
            <p className="text-gray-600">
              Temukan artikel-artikel menarik seputar pendidikan anak usia dini
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-card-belajar py-16 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Terjadi Kesalahan
              </h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-card-belajar py-16 pt-40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Artikel Terbaru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan artikel-artikel menarik seputar kegiatan PAUD Cahya Indria
            dan artikel lainnya!
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artikels.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Belum Ada Artikel
                </h3>
                <p className="text-gray-500">
                  Artikel akan segera tersedia. Silakan kembali lagi nanti!
                </p>
              </div>
            </div>
          ) : (
            artikels.map((artikel) => (
              <article
                key={artikel.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link href={`/artikel/${artikel.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      src={artikel.imageUrl || "/images/default-article.jpg"}
                      alt={artikel.judul}
                      width={400}
                      height={192}
                      priority={false}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/default-article.jpg";
                      }}
                    />
                  </div>
                </Link>

                <div className="p-5">
                  {/* Date */}
                  <div className="flex items-center text-sm mb-3 text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <time dateTime={artikel.createdAt}>
                      {formatDate(artikel.createdAt)}
                    </time>
                  </div>

                  {/* Title */}
                  <Link href={`/artikel/${artikel.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      {artikel.judul}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="mb-4 font-normal text-gray-600 line-clamp-3">
                    {artikel.deskripsiSingkat ||
                      "Baca artikel ini untuk mengetahui lebih lanjut."}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/artikel/${artikel.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  >
                    Baca Selengkapnya
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>

                  {/* Author */}
                  <div className="flex items-center mt-4 pt-3 border-t border-gray-100">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Oleh{" "}
                      <span className="font-medium text-gray-700">
                        {artikel.author}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtikelPage;
