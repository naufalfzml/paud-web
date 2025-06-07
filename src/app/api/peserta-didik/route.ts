import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, alamat, ttl, namaWali, noHpWali, userId } = body;

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User tidak terautentikasi' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validasi data
    if (!fullName || !alamat || !ttl || !namaWali || !noHpWali) {
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

    // Koneksi langsung ke Supabase (tanpa session helper)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // WARNING: hanya aman digunakan di server-side
    );

    const { data, error } = await supabase
      .from('PendaftarPesertaDidik')
      .insert([
        { fullName, alamat, ttl, namaWali, noHpWali, userId }
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
