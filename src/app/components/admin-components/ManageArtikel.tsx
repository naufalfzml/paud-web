'use client';

import { useState } from 'react';
import { Search, Filter, Edit, Trash2, Plus, Eye, Calendar } from 'lucide-react';

const ManageArtikel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const articles = [
    { 
      id: 1, 
      title: 'Inovasi Pendidikan Digital di Era Modern', 
      category: 'Pendidikan',
      status: 'published', 
      author: 'Maya Sari',
      date: '2024-01-15',
      views: 1250
    },
    { 
      id: 2, 
      title: 'Pentingnya Literasi Digital untuk Siswa', 
      category: 'Teknologi',
      status: 'draft', 
      author: 'Ahmad Susanto',
      date: '2024-01-14',
      views: 0
    },
    { 
      id: 3, 
      title: 'Strategi Pembelajaran Hybrid Learning', 
      category: 'Metodologi',
      status: 'published', 
      author: 'Siti Nurhaliza',
      date: '2024-01-13',
      views: 890
    },
    { 
      id: 4, 
      title: 'Pengembangan Kurikulum Merdeka', 
      category: 'Kurikulum',
      status: 'review', 
      author: 'Budi Santoso',
      date: '2024-01-12',
      views: 0
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const ArticleForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Tambah Artikel Baru</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Judul Artikel</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Masukkan judul artikel..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Pendidikan</option>
            <option>Teknologi</option>
            <option>Metodologi</option>
            <option>Kurikulum</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Konten Artikel</label>
        <textarea
          rows={6}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Tulis konten artikel di sini..."
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gambar Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Tayang</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          Simpan
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
          Simpan sebagai Draft
        </button>
        <button 
          onClick={() => setShowForm(false)}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Artikel</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Tambah Artikel</span>
        </button>
      </div>

      {showForm && <ArticleForm />}

      {/* Filters */}
      <div className="bg-white text-gray-500 focus:text-black rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="text-gray-500 focus:text-black absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari judul artikel atau penulis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-gray-500 focus:text-black w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5  text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-gray-500 focus:text-black px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Semua Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="review">Review</option>
            </select>
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Artikel
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Penulis
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      article.status === 'published' ? 'bg-green-100 text-green-800' :
                      article.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {article.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    {article.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {article.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageArtikel;
