"use client";

import { useAuth } from "@/lib/AuthContext";
import { useEffect, useState } from "react";
import { CircleUserRound, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ProfileSettings = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    no_hp: "",
  });
  const [tab, setTab] = useState<"user-info" | "change-pass">("user-info");

  const [originalName, setOriginalName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);

  const [passLama, setPassLama] = useState(true);
  const [passBaru, setPassBaru] = useState(true);
  const [passKonfir, setPassKonfir] = useState(true);
  const [passUtama, setPassUtama] = useState(true);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (user?.id) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    const res = await fetch(`/api/user?id=${user?.id}`);
    const data = await res.json();
    if (data) {
      setFormData({
        name: data.name || "",
        address: data.address || "",
        no_hp: data.no_hp || "",
      });
      setOriginalName(data.name || "");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateInfo = async () => {
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user?.id,
        name: formData.name,
        address: formData.address,
        no_hp: formData.no_hp,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setMessage("Berhasil update informasi akun!");
      setSuccess(true);
      await router.refresh();
      await fetchUserData();
    } else {
      setMessage("Gagal memperbarui informasi akun.");
      setSuccess(false);
    }
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    setMessage("");
    setSuccess(null);
    setPassLama(true);
    setPassBaru(true);
    setPassKonfir(true);
    setPassUtama(true);

    try {
      if (newPassword.length < 6) {
        setMessage("Password minimal 6 karakter.");
        setSuccess(false);
        setPassBaru(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage("Konfirmasi password tidak cocok.");
        setSuccess(false);
        setPassKonfir(false);
        return;
      }

      if (newPassword === currentPassword) {
        setMessage("Password baru tidak boleh sama dengan yang lama.");
        setSuccess(false);
        setPassUtama(true);
        return;
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: user?.email ?? '',
        password: currentPassword,
      });

      if (loginError) {
        setMessage("Password saat ini salah.");
        setSuccess(false);
        setPassLama(false);
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setMessage("Gagal mengganti password: " + error.message);
        setSuccess(false);
        setPassUtama(false);
      } else {
        setMessage("Password berhasil diubah!");
        setSuccess(true);
        setPassUtama(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch {
      setMessage("Terjadi kesalahan saat mengganti password.");
      setSuccess(false);
      setPassUtama(false);
    } finally {
      setIsLoading(false);
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
          <CircleUserRound className="stroke-slate-800 w-32 h-32 mx-auto mb-4 rounded-full border-4 border-slate-300" />
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{originalName}</h2>
          <div className="pt-2 relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              id="profile-upload"
            />
            {/* <label
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
              Maximum upload size is <span className="font-semibold">1 MB</span>
            </p> */}
          </div>
        </div>

        {/* Main Panel */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 max-w-md gap-2 mb-6">
            <button
              onClick={() => setTab("user-info")}
              className={`px-4 py-2 rounded ${tab === "user-info" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              User Info
            </button>
            <button
              onClick={() => setTab("change-pass")}
              className={`px-4 py-2 rounded ${tab === "change-pass" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              Change Password
            </button>
          </div>

          {/* Tab Content */}
          {tab === "user-info" ? (
            <form className="space-y-5">
              {message && (
                <p className={`text-center text-sm font-medium ${success ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </p>
              )}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    disabled
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    className="cursor-not-allowed w-full mt-1 p-2 border rounded-md border-gray-300 text-gray-500"
                    title="Email tidak bisa diubah"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    placeholder="Masukkan alamat Anda"
                  />
                </div>
                <div>
                  <label htmlFor="no_hp" className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
                  <input
                    id="no_hp"
                    type="text"
                    value={formData.no_hp}
                    onChange={(e) => handleInputChange("no_hp", e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    placeholder="08123456789"
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
            <div className="grid grid-cols-1 gap-6">
              {message && passUtama && (
                <p className={`text-center text-sm font-medium ${success ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </p>
              )}

              {/* Current Password */}
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Password saat ini</label>
                {!passLama && <p className="text-red-500 text-sm">{message}</p>}
                <div className="relative">
                  <input
                    id="current-password"
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Password baru</label>
                {!passBaru && <p className="text-red-500 text-sm">{message}</p>}
                <div className="relative">
                  <input
                    id="new-password"
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Konfirmasi password baru</label>
                {!passKonfir && <p className="text-red-500 text-sm">{message}</p>}
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md border-gray-300 text-black pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleChangePassword}
                disabled={isLoading}
                className={`${
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
                } bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg`}
              >
                {isLoading ? "Menyimpan..." : "Ubah Password"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
