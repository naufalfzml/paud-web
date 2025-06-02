"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext"; // Sesuaikan path

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  
  // Refs untuk dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      
      // Check if click is outside user dropdown
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function untuk mengecek apakah link sedang aktif
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Function untuk mendapatkan style link
  const getLinkStyle = (path: string) => {
    return isActive(path)
      ? "text-blue-600 font-semibold bg-blue-50 px-3 py-2 rounded-lg"
      : "text-gray-600 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200";
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Dapatkan nama user untuk ditampilkan
  const getUserDisplayName = () => {
    if (!user) return '';
    
    // Coba ambil dari user_metadata terlebih dahulu
    const fullName = user.user_metadata?.name;
    if (fullName) return fullName;
    
    // Kalau tidak ada, gunakan bagian email sebelum @
    return user.email.split('@')[0];
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
        <Link href="/">
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
            className={`${getLinkStyle("/program")} flex items-center space-x-1`}
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
            className={`${getLinkStyle("/artikel-berita")} flex items-center space-x-1`}
          >
            <span>📰</span>
            <span>Artikel</span>
          </Link>

          {/* Dropdown Daftar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
                setUserDropdownOpen(false); // Close user dropdown
              }}
              className={`font-medium flex items-center space-x-1 focus:outline-none px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/daftar-peserta" || pathname === "/daftar-tenaga"
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <span>👤</span>
              <span>Daftar</span>
              <span className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border shadow-lg rounded-md mt-2 w-48 right-0 z-[60] py-1">
                <Link
                  href="/daftar-peserta"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    isActive("/daftar-peserta")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Daftar Peserta Didik
                </Link>
                <Link
                  href="/daftar-tenaga"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    isActive("/daftar-tenaga")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Daftar Tenaga Pendidik
                </Link>
              </div>
            )}
          </div>

          {/* Authentication Section */}
          {loading ? (
            // Loading state
            <div className="bg-gray-200 animate-pulse px-6 py-2 rounded-2xl w-20 h-8"></div>
          ) : user ? (
            // User is logged in - Show user dropdown
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setUserDropdownOpen(!userDropdownOpen);
                  setDropdownOpen(false); // Close daftar dropdown
                }}
                className="bg-blue-600 font-medium text-white px-4 py-2 rounded-2xl hover:bg-blue-700 ml-4 flex items-center space-x-2 focus:outline-none transition-colors"
              >
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  {getUserDisplayName().charAt(0).toUpperCase()}
                </span>
                <span className="max-w-24 truncate">{getUserDisplayName()}</span>
                <span className={`text-xs transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {userDropdownOpen && (
                <div className="absolute bg-white border shadow-lg rounded-md mt-2 w-48 right-0 z-[60]">
                  <div className="px-4 py-2 border-b bg-gray-50">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {getUserDisplayName()}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <span>👤</span>
                    <span>Akun</span>
                  </Link>
                  
                  <button
                    onClick={() => {
                      handleLogout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors"
                  >
                    <span>🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in - Show login button
            <Link
              href="/auth/login"
              className="bg-blue-600 font-medium text-white px-6 py-2 rounded-2xl hover:bg-blue-700 ml-4 transition-colors"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}