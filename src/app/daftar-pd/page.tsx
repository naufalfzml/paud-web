import Head from 'next/head';
import FormPendaftaran from '../components/FormPendaftaranPD';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mt-20">
              Pendaftaran Peserta Didik
            </h1>
            <p className="mt-2 text-gray-600">
              Silakan isi formulir di bawah ini untuk mendaftarkan peserta didik baru
            </p>
          </div>

          <FormPendaftaran />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
