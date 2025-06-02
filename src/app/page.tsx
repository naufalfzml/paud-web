import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ArtikelCard from './components/ArtikelCard';

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
                <br/>
                dengan
                <br/>
                <span className="text-green-500">Menyenangkan</span>
              </h2>
              <p className="text-black mb-8 leading-tight font-medium my-5 max-w-lg text-2xl">
                A warm and nurturing environment where every child's curiosity is celebrated and their unique potential is discovered.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-black bg-gray-300 rounded-xl inline-flex px-6 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer">Selengkapnya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/siswa.png" alt="" />
                  <span className="text-gray-600">400+ Siswa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/guru.png" alt="" />
                  <span className="text-gray-600">100+ Guru</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full sm:3/4">
              <div className="bg-gray-200 rounded-xl h-94 lg:h-[28rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-blue-400 rounded-full opacity-80"></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Suasana kelas yang menyenangkan</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-tentang-paud">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">Tentang PAUD</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-2xl mt-16">
            PAUD Cahya Indria is dedicated to providing a nurturing environment where children can explore, discover, and develop a love for learning through play-based educational experiences.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/images/visi.png" alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Age-appropriate activities designed to stimulate cognitive development in young minds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/images/misi.png" alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Misi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Age-appropriate activities designed to stimulate cognitive development in young minds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <BookOpen className="w-8 h-8 text-purple-600" /> */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Early Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Age-appropriate activities designed to stimulate cognitive development in young minds.
              </p>
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
      <section className="py-16 bg-artikel-berita text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-medium text-center mb-12">Artikel & Berita</h2>
          <div className="mt-0">
            <ArtikelCard />
          </div>

          <div className="text-center mt-12">
            <a href="/artikel-berita">
              <button className="bg-white text-teal-600 px-6 py-3 rounded-2xl hover:bg-gray-100 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
                Lihat Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ready-join">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">Ready to Join Our School?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Daftarkan anak Anda hari ini dan berikan mereka landasan pendidikan yang kuat untuk masa mendatang.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-2xl hover:bg-pink-600 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
            Daftar Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>        
    </div>
  );
};

export default PAUDWebsite;