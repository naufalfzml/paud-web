import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {

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