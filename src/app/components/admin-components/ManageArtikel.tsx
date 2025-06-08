'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Filter, Edit, Trash2, Plus, Eye, Calendar, Save, X, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Define types
interface Article {
  id: string;
  judul: string;
  content: string;
  author: string;
  imageUrl?: string;
  deskripsiSingkat?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

const ManageArtikel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    judul: '',
    content: '',
    author: '',
    imageUrl: '',
    deskripsiSingkat: '',
    isPublished: false
  });

  // Fetch articles from API
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/artikel');
      if (!response.ok) {
        throw new Error('Gagal mengambil data artikel');
      }
      const data: Article[] = await response.json();
      setArticles(data);
      setError('');
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  // Update article status API function
  const updateArticleStatus = async (articleId: string, isPublished: boolean) => {
    const response = await fetch(`/api/artikel?id=${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isPublished }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update status');
    }
    
    return response.json();
  };

  // Handle status change with proper error handling
  const handleStatusChange = async (articleId: string, isPublished: boolean) => {
    try {
      // Update ke backend
      await updateArticleStatus(articleId, isPublished);
      
      // Update state lokal
      setArticles(prevArticles => 
        prevArticles.map(article => 
          article.id === articleId 
            ? { ...article, isPublished }
            : article
        )
      );
      
      // Clear any previous errors
      setError('');
    } catch (err: any) {
      setError(err.message || 'Gagal mengubah status artikel');
      console.error('Error updating status:', err);
    }
  };
    
  // Handle form input changes with useCallback to prevent re-renders
  const handleFormChange = useCallback((field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Submit form (create or update)
  const handleSubmit = async () => {
    if (!formData.judul || !formData.content || !formData.author) {
      setError('Judul, konten, dan penulis wajib diisi');
      return;
    }

    try {
      const method = editingArticle ? 'PUT' : 'POST';
      const url = editingArticle ? `/api/artikel?id=${editingArticle.id}` : '/api/artikel';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal menyimpan artikel');
      }

      await fetchArticles();
      resetForm();
      setError('');
    } catch (err: any) {
      setError(err.message);
      console.error('Error saving article:', err);
    }
  };

  // Delete article
  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      return;
    }

    try {
      const response = await fetch(`/api/artikel?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal menghapus artikel');
      }

      await fetchArticles();
      setError('');
    } catch (err: any) {
      setError(err.message);
      console.error('Error deleting article:', err);
    }
  };

  // Edit article
  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      judul: article.judul,
      content: article.content,
      author: article.author,
      imageUrl: article.imageUrl || '',
      deskripsiSingkat: article.deskripsiSingkat || '',
      isPublished: article.isPublished
    });
    setShowForm(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      judul: '',
      content: '',
      author: '',
      imageUrl: '',
      deskripsiSingkat: '',
      isPublished: false
    });
    setEditingArticle(null);
    setShowForm(false);
    setError('');
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID');
  };

  // Get status label
  const getStatusLabel = (article: Article) => {
    return article.isPublished ? 'published' : 'draft';
  };

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const status = getStatusLabel(article);
    const matchesStatus = statusFilter === 'all' || status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  // Enhanced image upload with validation
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setError('Format file tidak didukung. Gunakan JPG, PNG, GIF, atau WebP.');
      return;
    }

    // Validasi ukuran file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran file terlalu besar. Maksimal 5MB.');
      return;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    setIsUploading(true);
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (error) {
        console.error('Upload error:', error.message);
        setError('Gagal mengupload gambar: ' + error.message);
        return;
      }

      const { data: publicUrlData } = supabase
        .storage
        .from('images')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        handleFormChange('imageUrl', publicUrlData.publicUrl);
        setError(''); // Clear error jika berhasil
      }
    } catch (err: any) {
      console.error('Unexpected upload error:', err);
      setError('Terjadi kesalahan tidak terduga saat upload gambar.');
    } finally {
      setIsUploading(false);
    }
  };

  const ArticleForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          {editingArticle ? 'Edit Artikel' : 'Tambah Artikel Baru'}
        </h3>
        <button
          onClick={resetForm}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-red-700 text-sm">{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Artikel *
            </label>
            <input
              type="text"
              value={formData.judul}
              onChange={(e) => handleFormChange('judul', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Masukkan judul artikel..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Penulis *
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => handleFormChange('author', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Nama penulis..."
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi Singkat
          </label>
          <textarea
            rows={2}
            value={formData.deskripsiSingkat}
            onChange={(e) => handleFormChange('deskripsiSingkat', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Deskripsi singkat artikel..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Konten Artikel *
          </label>
          <textarea
            rows={8}
            value={formData.content}
            onChange={(e) => handleFormChange('content', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Tulis konten artikel di sini..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Gambar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUploading}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-black disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {isUploading && (
            <div className="mt-2 flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <span className="text-sm text-gray-600">Mengupload gambar...</span>
            </div>
          )}
          {formData.imageUrl && (
            <div className="mt-3">
              <img 
                src={formData.imageUrl} 
                alt="Preview" 
                className="w-32 h-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isPublished"
            checked={formData.isPublished}
            onChange={(e) => handleFormChange('isPublished', e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="isPublished" className="text-sm text-gray-700">
            Publish artikel sekarang
          </label>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isUploading}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            <span>{editingArticle ? 'Update' : 'Simpan'}</span>
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Artikel</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Tambah Artikel</span>
        </button>
      </div>

      {error && !showForm && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      {showForm && <ArticleForm />}

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari judul artikel atau penulis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            >
              <option value="all">Semua Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Memuat artikel...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Artikel
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
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredArticles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      {articles.length === 0 ? 'Belum ada artikel' : 'Tidak ada artikel yang sesuai filter'}
                    </td>
                  </tr>
                ) : (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start space-x-3">
                          {article.imageUrl && (
                            <img 
                              src={article.imageUrl} 
                              alt={article.judul}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          )}
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {article.judul}
                            </div>
                            {article.deskripsiSingkat && (
                              <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                                {article.deskripsiSingkat}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={article.isPublished ? "published" : "draft"}
                          onChange={(e) => handleStatusChange(article.id, e.target.value === "published")}
                          className={`text-xs font-semibold rounded-full border-0 px-2 py-1 focus:ring-2 focus:ring-blue-500 ${
                            article.isPublished 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {article.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {formatDate(article.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEdit(article)}
                            className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                            title="Edit artikel"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(article.id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            title="Hapus artikel"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageArtikel;