"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                    <li><a href="#" className="hover:text-white">Reguler</a></li>
                    <li><a href="#" className="hover:text-white">Fullday A</a></li>
                    <li><a href="#" className="hover:text-white">Fullday B</a></li>
                    <li><a href="#" className="hover:text-white">Fullday C</a></li>
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
                
                <div>
                <h4 className="font-bold mb-4">Lokasi</h4>
                <div className="space-y-2 text-sm text-gray-400">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9934753857888!2d110.63395907460557!3d-6.891382793107693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70eb415d6f098b%3A0x5c4e32f69a1d71de!2sPAUD%20Cahya%20Indria%20Demak!5e0!3m2!1sen!2sid!4v1749001100690!5m2!1sen!2sid" width="600" height="450" className="w-full h-full rounded-md" allowFullScreen
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border:0}}></iframe>
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
