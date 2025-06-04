'use client';

import { useAuth } from "@/lib/AuthContext";
import { useEffect, useState } from "react";

const ProfileSettings = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    whatsApp: "",
  });
  const [tab, setTab] = useState<"user-info" | "change-pass">("user-info");

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

  const handleUpdateInfo = async () => {
    const res = await fetch('/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user?.id,
        full_name: formData.fullName,
        address: formData.address,
        no_hp: formData.whatsApp,
      }),
    });

    const result = await res.json();
    if (result.success) {
      alert('Data berhasil diperbarui!');
    } else {
      alert('Gagal memperbarui data.');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert("Image upload belum diimplementasikan.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100">
              <img
                src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/360x203/webp/photo/2025/05/12/2446866993.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {formData.fullName || "username"}
            </h2>
            <div className="pt-2 relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg cursor-pointer"
              >
                Upload New Photo
              </label>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-600">
              <p className="mb-2">
                Upload a new avatar. Larger image will be resized automatically.
              </p>
              <p className="text-xs text-gray-500">
                Maximum upload size is{" "}
                <span className="font-semibold">1 MB</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Panel */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-row items-center justify-between max-w-7xl">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Edit Profile
            </h1>
            <a href="/" className="inline-block text-blue-600 hover:underline">
              ← Back to Home
            </a>
          </div>

          {/* Tabs */}
          <div className="pt-0 mt-0 mb-6">
            <div className="grid grid-cols-2 max-w-md gap-2">
              <button
                onClick={() => setTab("user-info")}
                className={`px-4 py-2 rounded ${
                  tab === "user-info"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                User Info
              </button>
              <button
                onClick={() => setTab("change-pass")}
                className={`px-4 py-2 rounded ${
                  tab === "change-pass"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Content */}
          {tab === "user-info" ? (
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-gray-500
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:text-black
                      transition duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    disabled
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-gray-500
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:text-black
                      transition duration-200"
                    placeholder="Masukkan alamat Anda"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nomor Whatsapp
                  </label>
                  <input
                    id="whatsapp"
                    type="text"
                    value={formData.whatsApp}
                    onChange={(e) =>
                      handleInputChange("whatsApp", e.target.value)
                    }
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-gray-400
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                      focus:text-black transition duration-200"
                    placeholder="+62xxx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleUpdateInfo}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                >
                  Update Info
                </button>
              </div>
            </form>
          ) : (
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value=""
                onChange={(e) =>
                  handleInputChange("password", e.target.value)
                }
                className="w-full mt-1 p-2 border rounded-md border-gray-300 text-gray-400
                  focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:text-black
                  transition duration-200"
                placeholder="********"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
