"use client";

import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type User = {
  id: number;
  namaLengkap: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  status: "Aktif" | "Nonaktif" | "Pending";
};

const dummyUser: User = {
  id: 1,
  namaLengkap: "Ahmad Susanto",
  email: "ahmad@bemail.com",
  role: "Admin",
  status: "Aktif",
};

const EditUserPage = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("Fetching data for user ID:", params.id);
    setUser(dummyUser);
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (user) {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving user data:", user);
    alert("Perubahan telah disimpan!");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/dashboard/manajemen-user" className="hover:underline">
            Manajemen User
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium text-gray-700">Edit</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard/manajemen-user"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit User</h1>
        </div>
      </div>

      {/* Form Edit */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama Lengkap */}
          <div>
            <label
              htmlFor="namaLengkap"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              value={user.namaLengkap}
              onChange={handleChange}
              className="w-full text-gray-500 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:text-black transition"
            />
          </div>

          {/* Input Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full text-gray-500 focus:text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Dropdown Role */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full  text-gray-500 px-4 py-2 focus:text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
            >
              <option>Admin</option>
              <option>Editor</option>
              <option>User</option>
            </select>
          </div>

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
              value={user.status}
              onChange={handleChange}
              className="w-full text-gray-500 px-4 py-2 focus:text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
            >
              <option>Aktif</option>
              <option>Nonaktif</option>
              <option>Pending</option>
            </select>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan Perubahan
            </button>
            <Link href="/dashboard/manajemen-user">
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
      <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 max-w-2xl">
        <h4 className="font-bold mb-2">Informasi</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Pastikan email yang dimasukkan valid dan unik.</li>
          <li>Role menentukan hak akses user dalam sistem.</li>
          <li>Status "Pending" berarti user belum diverifikasi.</li>
          <li>Perubahan akan langsung berlaku setelah disimpan.</li>
        </ul>
      </div>
    </div>
  );
};

export default EditUserPage;
