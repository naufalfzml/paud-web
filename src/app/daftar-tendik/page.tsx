import Head from 'next/head';
import FormPendaftaran from '../components/FormPendaftaranTP';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <div className="font-fredoka">
    <Navbar></Navbar>
      <div className="min-h-screen bg-header py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mt-20">
              Pendaftaran Tenaga Pendidik
            </h1>
            <p className="mt-2 text-gray-600">
              Silakan isi formulir di bawah ini untuk mendaftarkan diri sebagai tenaga pendidik
            </p>
          </div>

          <FormPendaftaran />
        </div>
      </div>
      <Footer></Footer>
      </div>
    </>
  );
}
