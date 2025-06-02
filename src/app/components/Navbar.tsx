"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Hook untuk mendapatkan path saat ini

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function untuk mengecek apakah link sedang aktif
  const isActive = (path: any) => {
    return pathname === path;
  };

  // Function untuk mendapatkan style link
  const getLinkStyle = (path: any) => {
    return isActive(path)
      ? "text-blue-600 font-semibold bg-blue-50 px-3 py-2 rounded-lg"
      : "text-gray-600 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200";
  };

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
 ${
   isScrolled
     ? "bg-white/90 shadow-md rounded-full px-6 w-[90%] max-w-5xl backdrop-blur-md top-4"
     : "bg-white w-full px-0 py-4"
 }`}
    >
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <Link
          href="/"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/images/logo-paud.png" alt="Logo PAUD" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                PAUD Cahya Indria
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                Cerdas Cermat Ceria!
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <Link
            href="/"
            className={`${getLinkStyle("/")} flex items-center space-x-1`}
          >
            <span>🏠</span>
            <span>Beranda</span>
          </Link>

          <Link
            href="/program"
            className={`${getLinkStyle(
              "/program"
            )} flex items-center space-x-1`}
          >
            <span>📋</span>
            <span>Program</span>
          </Link>

          <Link
            href="/profil"
            className={`${getLinkStyle("/profil")} flex items-center space-x-1`}
          >
            <span>ℹ️</span>
            <span>Profil</span>
          </Link>

          <Link
            href="/artikel-berita"
            className={`${getLinkStyle(
              "/artikel-berita"
            )} flex items-center space-x-1`}
          >
            <span>📰</span>
            <span>Artikel</span>
          </Link>

          {/* Dropdown Daftar */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`font-medium flex items-center space-x-1 focus:outline-none px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/daftar-peserta" || pathname === "/daftar-tenaga"
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <span>👤</span>
              <span>Daftar</span>
              <span className="text-xs">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border shadow-md rounded-md mt-2 w-48 right-0 z-50">
                <Link
                  href="/daftar-peserta"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    isActive("/daftar-peserta")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  Daftar Peserta Didik
                </Link>
                <Link
                  href="/daftar-tenaga"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    isActive("/daftar-tenaga")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  Daftar Tenaga Pendidik
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/auth/login"
            className="bg-blue-600 font-medium text-white px-6 py-1 rounded-2xl hover:bg-blue-700 ml-4"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}