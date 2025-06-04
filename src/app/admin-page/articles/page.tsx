import React from 'react';
import ProfilPage from '@/app/components/Profil';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ManageArtikel from '@/app/components/admin-components/ManageArtikel';

export default function Artikel() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <ManageArtikel></ManageArtikel>
    </div>
  );
}
