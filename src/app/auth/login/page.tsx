import React from 'react';
import LoginForm from '@/app/components/LoginForm';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat" style={{ backgroundImage: "url('/bg-login.svg')" }}>
      <Navbar />

      <div className="flex flex-1">
        <div className="w-1/2 flex items-center justify-center pt-40 py-16" >
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-gray-900 mb-2">
                SELAMAT DATANG
              </h1>
              <p className="text-gray-600">
                Selamat datang! Mohon login terlebih dahulu.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>

        <div className="w-1/2 relative">
        </div>
      </div>

      <Footer />
    </div>
  );
}