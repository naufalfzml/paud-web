import React from "react";
import RegisterForm from "@/app/components/RegisterForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/bg-regist.jpg')" }}
    >
      <Navbar />

      <div className="flex flex-1">
        <div className="w-1/2 flex items-center justify-center bg-register py-8 pt-40">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-gray-900 mb-2">
                BUAT AKUN
              </h1>
              <p className="text-gray-600 underline">
                Masukkan detail informasi Anda
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>

        <div className="w-1/2 relative"></div>
      </div>

      <Footer />
    </div>
  );
}
