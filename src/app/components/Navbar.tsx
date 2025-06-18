"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import {
  House,
  Info,
  Newspaper,
  UserRoundPlus,
  LogOut,
  CircleUserRound,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }

      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkStyle = (path: string) => {
    return isActive(path)
      ? "text-black font-medium px-3 py-2 rounded-lg bg-gray-100"
      : "text-gray-600 font-medium hover:text-black px-3 py-2 rounded-lg transition-all duration-200";
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getUserDisplayName = () => {
    if (!user) return "";

    const fullName = user.user_metadata?.name;
    if (fullName) return fullName;

    return user.email.split("@")[0];
  };

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    whatsApp: "",
    role: "",
  });

  useEffect(() => {
    if (user?.id) {
      fetch(`/api/user?id=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setFormData({
              fullName: data.name || "",
              address: data.address || "",
              whatsApp: data.no_hp || "",
              role: data.role || "",
            });
          }
        });
    }
  }, [user]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <header
      className="fixed left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md"
      style={{
        transition: "all 0.5s ease-in-out",
        width: isScrolled ? "65%" : "100%",
        top: isScrolled ? "1rem" : "0px",
        padding: isScrolled ? "0.25rem 1.5rem" : "1rem 0",
        borderRadius: isScrolled ? "9999px" : "0px",
      }}
    >
      <div className="max-w-6xl mx-auto py-2 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/images/logo-paud.png" alt="Logo PAUD" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
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
            <House></House>
            <span>Beranda</span>
          </Link>

          <Link
            href="/profil"
            className={`${getLinkStyle("/profil")} flex items-center space-x-1`}
          >
            <Info></Info>
            <span>Profil</span>
          </Link>

          <Link
            href="/artikel"
            className={`${getLinkStyle(
              "/artikel"
            )} flex items-center space-x-1`}
          >
            <Newspaper></Newspaper>
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
                  ? "text-black font-semibold bg-blue-50"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              <UserRoundPlus></UserRoundPlus>
              <span>Daftar</span>
              <span
                className={`text-xs transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border shadow-lg rounded-md mt-2 w-48 right-0 z-[60] py-1">
                <Link
                  href="/daftar-pd"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    isActive("/daftar-peserta")
                      ? "bg-blue-50 text-black font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Daftar Peserta Didik
                </Link>
                <Link
                  href="/daftar-tendik"
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
            <div className="bg-gray-200 animate-pulse px-6 py-2 rounded-2xl w-20 h-8"></div>
          ) : user ? (
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setUserDropdownOpen(!userDropdownOpen);
                  setDropdownOpen(false);
                }}
                className="bg-blue-600 font-medium text-white px-4 py-2 rounded-2xl hover:bg-blue-700 ml-4 flex items-center space-x-2 focus:outline-none transition-colors"
              >
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  {formData.fullName.charAt(0).toUpperCase()}
                </span>
                <span className="max-w-24 truncate">{formData.fullName}</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    userDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {userDropdownOpen && (
                <div className="absolute bg-white border shadow-lg rounded-md mt-2 w-48 right-0 z-[60]">
                  <div className="px-4 py-2 border-b bg-gray-50">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {formData.fullName}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  {formData?.role === "ADMIN" && (
                    <Link
                      href="/admin-page/users"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 transition-colors"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <LayoutDashboard></LayoutDashboard>
                      <span>Dashboard</span>
                    </Link>
                  )}

                  <Link
                    href="/profile-settings"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <CircleUserRound></CircleUserRound>
                    <span>Akun</span>
                  </Link>

                  <a href="/">
                    <button
                      onClick={() => {
                        handleLogout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors"
                    >
                      <LogOut></LogOut>
                      <span>Logout</span>
                    </button>
                  </a>
                </div>
              )}
            </div>
          ) : (
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
