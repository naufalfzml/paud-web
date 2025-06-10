import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  try {
    // Ambil semua data dari tabel PesertaDidik
    const { data, error } = await supabase
      .from('PesertaDidik')
      .select('*')
      .order('createdAt', { ascending: false });

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, alamat, ttl, namaWali, noHpWali, program, userId, jenis_kelamin } = body;

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User tidak terautentikasi' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi data
    if (!fullName || !alamat || !ttl || !noHpWali || !namaWali || !jenis_kelamin || !program) {
      return new Response(JSON.stringify({ error: 'Semua field harus diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(noHpWali)) {
      return new Response(JSON.stringify({ error: 'Format nomor HP tidak valid' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { data, error } = await supabase
      .from('PesertaDidik')
      .insert([
        { fullName, alamat, ttl, namaWali, noHpWali, program, userId, jenis_kelamin }
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
      message: 'Data berhasil ditambahkan',
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

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing teacher ID in query parameter' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const updateData = {
      ...body,
      updatedAt: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('PesertaDidik')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase update error:', error);
      return NextResponse.json(
        { error: 'Failed to update teacher', details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: 'Teacher not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID tidak ditemukan' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { data, error } = await supabase
      .from('PesertaDidik')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error('Delete error:', error);
      return new Response(JSON.stringify({ error: 'Gagal menghapus data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ error: 'Data tidak ditemukan' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Data berhasil dihapus',
      data: data[0]
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