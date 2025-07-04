import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArtikelCard from "./components/ArtikelCard";
import FormKritikSaran from "./components/KritikSaran";
import { Lightbulb, HandHeart, LocateFixed } from "lucide-react";

const PAUDWebsite = () => {
  return (
    <div className="font-fredoka min-h-screen bg-gray-500">
      {/* Header */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="bg-header py-16 pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card-belajar rounded-2xl shadow-xl px-16 py-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-5xl font-semibold mb-6 text-black leading-tight">
                Mulai <span className="text-belajar">Belajar</span>
                <br />
                dengan
                <br />
                <span className="text-green-500">Menyenangkan</span>
              </h2>
              <p className="text-black mb-8 leading-tight font-medium my-5 max-w-lg text-2xl">
                PAUD Cahya Indria menyediakan pembelajaran yang interaktif dan
                menyenangkan dengan program Islami seperti praktek sholat,
                hafalan doa harian, surat-surat pendek dan hadist.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <a href="/profil">
                    <span className="font-medium text-black bg-gray-300 rounded-xl inline-flex px-6 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer">
                      Selengkapnya
                    </span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/siswa.png" alt="" />
                  <span className="text-gray-600">300+ Siswa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/guru.png" alt="" />
                  <span className="text-gray-600">30+ Guru</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full sm:3/4">
              <img
                src={
                  "https://yvixnhiybrgmxfywqjzu.supabase.co/storage/v1/object/public/homepage//homepage.jpg"
                }
                className="bg-gray-200 rounded-xl h-9 object-cover lg:h-[28rem] flex items-center justify-center relative overflow-hidden"
              ></img>
            </div>
            <div className="absolute bottom-4 right-4"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-tentang-paud">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">
            Tentang Cahya Indria
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-2xl mt-8">
            PAUD Cahya Indria berkomitmen untuk menyediakan lingkungan yang
            hangat dan mendukung, tempat anak-anak dapat bereksplorasi,
            menemukan hal baru, dan menumbuhkan cinta belajar melalui pengalaman
            pendidikan berbasis bermain.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb color="#000000" size={50}></Lightbulb>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visi</h3>
              <p className="text-gray-600 text-md leading-relaxed text-center">
                Menyiapkan calon generasi yang bertaqwa, sehat, cerdas, dan
                berbudi luhur
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocateFixed color="#000000" size={50}></LocateFixed>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Misi</h3>
              <ul className="list-disc text-gray-600 text-md leading-relaxed text-left ml-4">
                <li>Mempraktekkan dasar-dasar keimanan</li>
                <li>Bermain dengan pengetahuan</li>
                <li>Melatih kebersamaan</li>
                <li>Mencintai budaya lingkungan</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart color="#000000" size={50}></HandHeart>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tujuan</h3>
              <ul className="list-disc text-gray-600 text-md leading-relaxed text-left ml-4">
                <li>Mewujudkan anak yang bertaqwa dan berakhlaqul karimah</li>
                <li>
                  Mendidik anak agar menjadi generasi yang berkualitas berguna
                  bagi agama, nusa, dan bangsa
                </li>
                <li>
                  Mengembangkan kreatifitas ketrampilan anak didik untuk
                  mengekspresikan diri dalam berkarya seni
                </li>
                <li>
                  Mengembangkan bakat minat dan kemampuan sehingga anak
                  berkembang secara optimal dan mampu beraktualisasi diri
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/profil">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-2xl hover:bg-gray-700 transition-transform duration-300 hover:scale-110 cursor-pointer">
                Pelajari Lebih Lanjut
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-artikel text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-medium text-center mb-12">
            Artikel & Berita
          </h2>
          <div className="mt-0">
            <ArtikelCard />
          </div>

          <div className="text-center mt-12">
            <a href="/artikel">
              <button className="bg-white text-teal-600 px-6 py-3 rounded-2xl hover:bg-gray-100 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
                Lihat Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ready-join">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">
            Siap bergabung dengan PAUD Cahya Indria?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Daftarkan anak Anda hari ini dan berikan mereka landasan pendidikan
            yang kuat untuk masa mendatang.
          </p>
          <a href="/daftar-pd">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-2xl hover:bg-pink-600 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </section>

      <FormKritikSaran></FormKritikSaran>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default PAUDWebsite;
