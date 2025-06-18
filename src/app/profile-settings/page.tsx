import React from "react";
import ProfilSettings from "@/app/components/SettingProfile";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Artikel() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <ProfilSettings></ProfilSettings>

      <Footer />
    </div>
  );
}
