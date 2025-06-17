import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, alamat, ttl, noHp, userId, email, jenis_kelamin, pendidikan_terakhir, alasan_melamar } = body;

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User tidak terautentikasi' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi data
    if (!fullName || !alamat || !ttl || !noHp || !email || !jenis_kelamin || !pendidikan_terakhir || !alasan_melamar) {
      return new Response(JSON.stringify({ error: 'Semua field harus diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(noHp)) {
      return new Response(JSON.stringify({ error: 'Format nomor HP tidak valid' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Koneksi langsung ke Supabase (tanpa session helper)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // WARNING: hanya aman digunakan di server-side
    );

    const { data, error } = await supabase
      .from('PendaftarTenagaPendidik')
      .insert([
        { fullName, alamat, ttl, noHp, userId, email, jenis_kelamin, pendidikan_terakhir, alasan_melamar }
      ])
      .select();

    if (error) {
      console.error('Insert error:', error);
      return new Response(JSON.stringify({ error: 'Gagal menyimpan data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Pendaftaran berhasil',
      data: data[0]
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Koneksi langsung ke Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Ambil semua data dari tabel PendaftarTenagaPendidik
    const { data, error } = await supabase
      .from('PendaftarTenagaPendidik')
      .select('*')
      .order('createdAt', { ascending: false }); // Optional: urutkan berdasarkan tanggal terbaru

    if (error) {
      console.error('Select error:', error);
      return new Response(JSON.stringify({ error: 'Gagal mengambil data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Data berhasil diambil',
      data: data,
      total: data?.length || 0
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Optional: Method GET dengan filter dan pagination
export async function GET_WITH_FILTERS(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const pendidikan = searchParams.get('pendidikan') || '';
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    let query = supabase
      .from('PendaftarTenagaPendidik')
      .select('*', { count: 'exact' });

    // Filter berdasarkan pencarian nama
    if (search) {
      query = query.ilike('fullName', `%${search}%`);
    }

    // Filter berdasarkan pendidikan terakhir
    if (pendidikan) {
      query = query.eq('pendidikan_terakhir', pendidikan);
    }

    // Pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await query
      .order('createdAt', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Select error:', error);
      return new Response(JSON.stringify({ error: 'Gagal mengambil data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Data berhasil diambil',
      data: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Method PUT untuk update status
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    // Validasi input
    if (!id) {
      return new Response(JSON.stringify({ 
        error: 'ID tidak boleh kosong',
        code: 'MISSING_ID'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!status) {
      return new Response(JSON.stringify({ 
        error: 'Status tidak boleh kosong',
        code: 'MISSING_STATUS'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi status yang diizinkan
    const validStatuses = ['MENUNGGU VERIFIKASI', 'TELAH DIVERIFIKASI', 'DITOLAK', 'DITERIMA'];
    if (!validStatuses.includes(status)) {
      return new Response(JSON.stringify({ 
        error: 'Status tidak valid',
        code: 'INVALID_STATUS',
        validStatuses
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Update status
    const { data, error } = await supabase
      .from('PendaftarTenagaPendidik')
      .update({ 
        status,
        updatedAt: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Update status error:', error);
      
      if (error.code === 'PGRST116') {
        return new Response(JSON.stringify({ 
          error: 'Data tidak ditemukan',
          code: 'NOT_FOUND'
        }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ 
        error: 'Gagal mengupdate status',
        code: 'DB_UPDATE_ERROR'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'Data tidak ditemukan',
        code: 'NOT_FOUND'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Status berhasil diupdate',
      data: data[0]
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ 
      error: 'Terjadi kesalahan server',
      code: 'INTERNAL_SERVER_ERROR'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Method DELETE untuk hapus data
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ 
        error: 'ID tidak boleh kosong',
        code: 'MISSING_ID'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Ambil data sebelum dihapus untuk logging
    const { data: existingData, error: selectError } = await supabase
      .from('PendaftarTenagaPendidik')
      .select('*')
      .eq('id', id)
      .single();

    if (selectError && selectError.code !== 'PGRST116') {
      console.error('Select before delete error:', selectError);
      return new Response(JSON.stringify({ 
        error: 'Gagal memeriksa data',
        code: 'DB_SELECT_ERROR'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!existingData) {
      return new Response(JSON.stringify({ 
        error: 'Data tidak ditemukan',
        code: 'NOT_FOUND'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hapus data
    const { error: deleteError } = await supabase
      .from('PendaftarTenagaPendidik')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Delete error:', deleteError);
      return new Response(JSON.stringify({ 
        error: 'Gagal menghapus data',
        code: 'DB_DELETE_ERROR'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Deleted PendaftarTenagaPendidik:', { id, fullName: existingData.fullName });

    return new Response(JSON.stringify({
      message: 'Data berhasil dihapus',
      deletedData: {
        id: existingData.id,
        fullName: existingData.fullName
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ 
      error: 'Terjadi kesalahan server',
      code: 'INTERNAL_SERVER_ERROR'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}