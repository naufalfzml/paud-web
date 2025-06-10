import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      alamat,
      ttl,
      namaWali,
      noHpWali,
      userId,
      jenis_kelamin,
      program,
      suratPernyataan,
      formulir
    } = body;

    // Log request untuk debugging
    console.log("API Request received:", {
      fullName: !!fullName,
      alamat: !!alamat,
      ttl: !!ttl,
      namaWali: !!namaWali,
      noHpWali: !!noHpWali,
      userId: !!userId,
      jenis_kelamin: !!jenis_kelamin,
      formulir: !!formulir,
      suratPernyataan: !!suratPernyataan,
      program: !!program
    });

    if (!userId) {
      return new Response(
        JSON.stringify({ error: "User tidak terautentikasi" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validasi semua field required
    const requiredFields = {
      fullName,
      alamat,
      ttl,
      namaWali,
      noHpWali,
      program,
      jenis_kelamin,
    };
    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => !value || value.trim() === "")
      .map(([key]) => key);

    if (missingFields.length > 0) {
      console.error("Validation failed: Missing fields:", missingFields);
      return new Response(
        JSON.stringify({
          error: "Semua field harus diisi",
          missingFields,
          code: "VALIDATION_ERROR",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(noHpWali)) {
      return new Response(
        JSON.stringify({ error: "Format nomor HP tidak valid" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validasi jenis kelamin
    const validGenders = ["Laki-laki", "Perempuan"];
    if (!validGenders.includes(jenis_kelamin)) {
      console.error("Validation failed: Invalid gender:", jenis_kelamin);
      return new Response(
        JSON.stringify({
          error: "Jenis kelamin tidak valid",
          code: "INVALID_GENDER",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validasi URL jika diisi
    if (formulir && formulir.trim() !== "") {
      try {
        new URL(formulir);
      } catch (error) {
        console.error("Validation failed: Invalid URL format:", formulir);
        return new Response(
          JSON.stringify({
            error: "Format URL tidak valid",
            code: "INVALID_URL",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    if (suratPernyataan && suratPernyataan.trim() !== "") {
      try {
        new URL(suratPernyataan);
      } catch (error) {
        console.error("Validation failed: Invalid URL format:", suratPernyataan);
        return new Response(
          JSON.stringify({
            error: "Format URL tidak valid",
            code: "INVALID_URL",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Koneksi langsung ke Supabase (tanpa session helper)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // WARNING: hanya aman digunakan di server-side
    );

    const { data: existingRegistration, error: checkError } = await supabase
      .from("PendaftarPesertaDidik")
      .select("id")
      .eq("userId", userId)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Database check error:", checkError);
      return new Response(
        JSON.stringify({
          error: "Gagal memeriksa pendaftaran",
          code: "DB_CHECK_ERROR",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (existingRegistration) {
      return new Response(
        JSON.stringify({
          error: "Anda sudah pernah mendaftar",
          code: "ALREADY_REGISTERED",
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Insert data baru
    const insertData = {
      fullName: fullName.trim(),
      alamat: alamat.trim(),
      ttl: ttl.trim(),
      namaWali: namaWali.trim(),
      noHpWali: noHpWali.trim(),
      jenis_kelamin,
      formulir: formulir ? formulir.trim() : null,
      suratPernyataan: suratPernyataan ? suratPernyataan.trim() : null,
      userId,
      status: "MENUNGGU VERIFIKASI",
      program,
      createdAt: new Date().toISOString(),
    };

    console.log("Inserting data:", { ...insertData, userId: "[REDACTED]" });

    const { data, error } = await supabase
      .from("PendaftarPesertaDidik")
      .insert([insertData])
      .select();

    if (error) {
      console.error("Insert error:", error);
      if (error.code === "23505") {
        return new Response(
          JSON.stringify({
            error: "Data pendaftaran sudah ada",
            code: "DUPLICATE_ENTRY",
          }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify({ error: "Gagal menyimpan data" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Pendaftaran berhasil",
        data: {
          id: data[0]?.id,
          fullName: data[0]?.fullName,
          status: data[0]?.status,
          createdAt: data[0]?.createdAt,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Terjadi kesalahan server" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Optional query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const jenis_kelamin = searchParams.get('jenis_kelamin') || '';
    const userId = searchParams.get('userId') || '';

    // Koneksi langsung ke Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Build query
    let query = supabase
      .from('PendaftarPesertaDidik')
      .select('*', { count: 'exact' });

    // Filter berdasarkan userId (untuk mengambil data user tertentu)
    if (userId) {
      query = query.eq('userId', userId);
    }

    // Filter berdasarkan pencarian nama
    if (search) {
      query = query.or(`fullName.ilike.%${search}%,namaWali.ilike.%${search}%`);
    }

    // Filter berdasarkan status
    if (status) {
      query = query.eq('status', status);
    }

    // Filter berdasarkan jenis kelamin
    if (jenis_kelamin) {
      query = query.eq('jenis_kelamin', jenis_kelamin);
    }

    // Pagination
    if (!userId) { // Jika tidak filter by userId, gunakan pagination
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);
    }

    // Order by created date (terbaru dulu)
    const { data, error, count } = await query
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Select error:', error);
      return new Response(JSON.stringify({ 
        error: 'Gagal mengambil data',
        code: 'DB_SELECT_ERROR'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Response format
    const response = {
      message: 'Data berhasil diambil',
      data: data || [],
      total: count || 0
    };

    // Add pagination info if not filtering by userId
    if (!userId) {
      response.pagination = {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
        hasNextPage: page * limit < (count || 0),
        hasPrevPage: page > 1
      };
    }

    return new Response(JSON.stringify(response), {
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

// Method untuk mengambil data berdasarkan ID tertentu
export async function GET_BY_ID(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

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

    const { data, error } = await supabase
      .from('PendaftarPesertaDidik')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Select by ID error:', error);
      
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
        error: 'Gagal mengambil data',
        code: 'DB_SELECT_ERROR'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Data berhasil diambil',
      data: data
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
      .from('PendaftarPesertaDidik')
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
      .from('PendaftarPesertaDidik')
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
      .from('PendaftarPesertaDidik')
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

    console.log('Deleted PendaftarPesertaDidik:', { id, fullName: existingData.fullName });

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