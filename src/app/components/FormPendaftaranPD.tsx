'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function FormPendaftaran() {
  const { user, loading: authLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: '',
    alamat: '',
    ttl: '',
    namaWali: '',
    noHpWali: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Log user info for debugging
      console.log('Submitting form with user:', { 
        userId: user?.id, 
        email: user?.email,
        hasUser: !!user 
      });

      const response = await fetch('/api/peserta-didik', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({...formData, userId: user.id}), 
      });

      const result = await response.json();

      console.log('API Response:', { 
        status: response.status, 
        result 
      });

      if (response.ok) {
        setMessage('Pendaftaran berhasil!');
        setMessageType('success');
        setFormData({
          fullName: '',
          alamat: '',
          ttl: '',
          namaWali: '',
          noHpWali: ''
        });
      } else {
        setMessage(result.error || 'Terjadi kesalahan');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('Terjadi kesalahan koneksi');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Memuat...</span>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-yellow-100 text-yellow-700 border border-yellow-300 p-3 rounded-md">
          <p>Silakan login terlebih dahulu untuk mengakses form pendaftaran.</p>
          <p className="text-sm mt-1">Status: User tidak terdeteksi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* User info - Enhanced for debugging */}
      <div className="mb-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          Logged in as: <strong>{user.email}</strong>
        </p>
        <p className="text-xs text-blue-600 mt-1">
          User ID: {user.id}
        </p>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-md ${
          messageType === 'success'
            ? 'bg-green-100 text-green-700 border border-green-300'
            : 'bg-red-100 text-red-700 border border-red-300'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama lengkap siswa"
          />
        </div>

        <div>
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
            Alamat *
          </label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
            rows={3}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder="Masukkan alamat lengkap"
          />
        </div>

        <div>
          <label htmlFor="ttl" className="block text-sm font-medium text-gray-700 mb-1">
            Tempat, Tanggal Lahir *
          </label>
          <input
            type="text"
            id="ttl"
            name="ttl"
            value={formData.ttl}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contoh: Jakarta, 15 Januari 2010"
          />
        </div>

        <div>
          <label htmlFor="namaWali" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Wali *
          </label>
          <input
            type="text"
            id="namaWali"
            name="namaWali"
            value={formData.namaWali}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama lengkap wali"
          />
        </div>

        <div>
          <label htmlFor="noHpWali" className="block text-sm font-medium text-gray-700 mb-1">
            No. HP Wali *
          </label>
          <input
            type="tel"
            id="noHpWali"
            name="noHpWali"
            value={formData.noHpWali}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contoh: 08123456789"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          } text-white`}
        >
          {loading ? 'Mendaftar...' : 'Daftar Sekarang'}
        </button>
      </form>
    </div>
  );
}