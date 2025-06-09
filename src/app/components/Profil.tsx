"use client"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/Carousel";


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative pt-20 px-6 text-center ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4 animate-fade-in">
          Tentang PAUD
        </h1>
        <p className="text-xl text-gray-600 animate-fade-in animation-delay-200">
          Cerdas, Cermat, Ceria!
        </p>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              PAUD Cahya Indria diberikan untuk anak usia 3-6 tahun, yaitu
              masa yang memberikan kontribusi berupa bentuk-bentuk yang akan
              menjadi dasar bagi tahap perkembangan selanjutnya. Dalam proses
              tersebut diperlukan rangsangan-rangsangan yang tepat agar potensi
              anak dapat berkembang secara optimal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Program pembelajaran di PAUD Cahya Indria direncanakan dengan
              pendekatan yang komprehensif dan bermakna berdasarkan kecerdasan
              majemuk yang ada dalam diri anak dengan menggunakan pendekatan
              holistik sehingga terciptanya anak yang berkarakter, kreatif,
              mandiri, dan berprestasi.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PAUD Classroom"
                width={400}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-md w-full"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision Mission Section Component
const VisionMissionSection = () => {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-widest">VISI</h2>
            <p className="text-black text-center font-normal px-4 leading-7 text-lg">Menyiapkan calon generasi yang bertaqwa, sehat, cerdas, dan berbudi luhur</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-200">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-widest">MISI</h2>
            <ul className="text-left leading-7 text-lg text-black font-normal list-disc ml-4">
              <li>Mempraktikkan dasar-dasar keimanan</li>
              <li>Melatih kebersamaan</li>
              <li>Bermain dengan pengetahuan</li>
              <li>Mencintai budaya dan lingkungan</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-wide">TUJUAN</h2>
            <ul className="text-left leading-7 text-lg text-black font-normal list-disc ml-4">
                <li>Mewujudkan anak yang bertaqwa dan berakhlaqul karimah</li>
                <li>Mendidik anak agar menjadi generasi yang berkualitas berguna bagi agama,nusa,dan bangsa</li>
                <li>Mengembangkan kreatifitas ketrampilan anak didik untuk mengekspresikan diri dalam berkarya seni</li>
                <li>Mengembangkan bakat minat dan kemampuan sehingga anak berkembang secara optimal dan mampu beraktualisasi diri</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfiniteCarouselItem {
  id: string | number;
  title: string;
  name?: string; // For organizational type
  description?: string; // For non-organizational type
  imageUrl?: string;
  color?: string; // For organizational type text background
}

interface InfiniteCarouselProps {
  items: InfiniteCarouselItem[];
  type: 'organizational' | string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items, type }) => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-visible px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-2 md:-ml-4 overflow-visible">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 relative overflow-visible"
            >
              <div className="p-3 overflow-visible">
                {type === 'organizational' ? (
                  <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-md transition-all duration-300 hover:scale-105 hover:z-30 overflow-hidden h-72 relative">
                    {item.imageUrl && (
                      <div className="h-1/2 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/CCCCCC/333333?text=No+Image'; }}
                        />
                      </div>
                    )}
                    <div className={`p-4 flex flex-col justify-center text-center ${item.color || 'bg-gray-700'} ${item.imageUrl ? 'h-1/2 rounded-b-2xl' : 'h-full rounded-2xl'}`}>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      {item.name && <p className="text-white/90 text-sm">{item.name}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-2xl shadow- hover:shadow-inner transition-all duration-300 hover:scale-100 hover:z-30 overflow-hidden h-72 group bg-slate-200">
                    <img
                      src={item.imageUrl || 'https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Available'}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/CCCCCC/333333?text=Error+Loading'; }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};


// Organizational Structure Section Component
const OrganizationalStructure = () => {
  const orgData: InfiniteCarouselItem[] = [ // Menggunakan InfiniteCarouselItem
    { id: 1, title: "Kepala Sekolah", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-purple-500 to-purple-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Wakil Kepala", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-blue-500 to-blue-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "Bendahara", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-green-500 to-green-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, title: "Sekretaris", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-pink-500 to-pink-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, title: "Guru Kelas A", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-indigo-500 to-indigo-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, title: "Guru Kelas B", name: "Hariyanto Setiadi D.C.S.Pd", color: "bg-gradient-to-br from-teal-500 to-teal-600", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];


  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-500 to-blue-500" id="struktur-kepengurusan">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white mb-12 animate-fade-in">
          STRUKTUR KEPENGURUSAN
        </h2>
        <InfiniteCarousel items={orgData} type="organizational" />
      </div>
    </section>
  );
};

// Facilities Section Component
const FacilitiesSection = () => {
  const facilitiesData: InfiniteCarouselItem[] = [
    { id: 1, title: "RUANG KELAS BER-AC", description: "Ruang kelas yang nyaman dengan pendingin udara", color: "bg-gradient-to-br from-blue-300 to-blue-400", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "TAMAN BERMAIN YANG AMAN", description: "Area bermain outdoor yang aman untuk anak", color: "bg-gradient-to-br from-green-300 to-green-400", imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "GURU YANG RAMAH ANAK", description: "Tenaga pengajar profesional dan berpengalaman", color: "bg-gradient-to-br from-purple-300 to-purple-400" , imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, title: "PERPUSTAKAAN MINI", description: "Koleksi buku cerita dan edukatif untuk anak", color: "bg-gradient-to-br from-pink-300 to-pink-400" , imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 5, title: "AREA SENI DAN KREATIVITAS", description: "Ruang khusus untuk mengembangkan kreativitas", color: "bg-gradient-to-br from-indigo-300 to-indigo-400" , imageUrl: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-400 to-cyan-400" id="fasilitas">
      -<div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white mb-12 animate-fade-in">
          FASILITAS PAUD
        </h2>
        <InfiniteCarousel items={facilitiesData} type="facilities" />
      </div>
    </section>
  );
};

// Main Profile Page Component
const ProfilPage = () => {
  return (
    <div className="min-h-screen font-fredoka bg-header">
      <div className="pt-16 ">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="vision">
          <VisionMissionSection />
        </div>
        <div id="structure">
          <OrganizationalStructure />
        </div>
        <div id="facilities">
          <FacilitiesSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
