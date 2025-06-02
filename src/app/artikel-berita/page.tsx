import React from 'react';
import ArtikelCard from '@/app/components/ArtikelCard';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Artikel() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat" style={{ backgroundImage: "url('/bg-login.jpg')" }}>
      <Navbar />

      <ArtikelCard></ArtikelCard>

      <Footer />
    </div>
  );
}
