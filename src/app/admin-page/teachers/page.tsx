import React from 'react';
import ProfilPage from '@/app/components/Profil';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ManageTeachers from '@/app/components/admin-components/ManageTeachers';

export default function Artikel() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <ManageTeachers></ManageTeachers>
    </div>
  );
}
