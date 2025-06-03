"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <img src="/images/logo-paud.png" alt="" />
                    </div>
                    <div>
                    <h3 className="font-bold">PAUD Cahya Indria</h3>
                    <p className="text-sm text-gray-400">Cerdas Cermat Ceria!</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    Memberikan pendidikan berkualitas untuk masa depan cerah anak-anak Indonesia.
                </p>
                </div>
                
                <div>
                <h4 className="font-bold mb-4">Program</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Kelompok Bermain</a></li>
                    <li><a href="#" className="hover:text-white">TK A</a></li>
                    <li><a href="#" className="hover:text-white">TK B</a></li>
                    <li><a href="#" className="hover:text-white">Daycare</a></li>
                </ul>
                </div>
                
                <div>
                <h4 className="font-bold mb-4">Informasi</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="/profil" className="hover:text-white">Tentang Kami</a></li>
                    <li><a href="/profil#fasilitas" className="hover:text-white">Fasilitas</a></li>
                    <li><a href="/profil#struktur-kepengurusan" className="hover:text-white">Guru</a></li>
                    <li><a href="/" className="hover:text-white">Kontak</a></li>
                </ul>
                </div>
                
                <div>
                <h4 className="font-bold mb-4">Kontak</h4>
                <div className="space-y-2 text-sm text-gray-400">
                    <p>📍 Jl. Patimura No.19, Petengan Selatan, Bintoro, Kec. Demak, Kabupaten Demak, Jawa Tengah, 59511</p>
                    <p>📞 (0291) 685547 / 081227477048</p>
                    <p>✉️ tkcahyaindria@gmail.com</p>
                </div>
                </div>
            </div>
            
            <hr className="border-gray-700 my-8" />
            
            <div className="text-center text-sm text-gray-400">
                <p>&copy; 2025 PAUD Cahya India. All rights reserved.</p>
            </div>
            </div>
        </footer>
    )
}
