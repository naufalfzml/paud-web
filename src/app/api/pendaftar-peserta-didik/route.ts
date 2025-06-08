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
      formUrl,
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
      formUrl: !!formUrl,
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
    if (formUrl && formUrl.trim() !== "") {
      try {
        new URL(formUrl);
      } catch (error) {
        console.error("Validation failed: Invalid URL format:", formUrl);
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
      formUrl: formUrl ? formUrl.trim() : null,
      userId,
      status: "pending",
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

// Optional: Handle GET request untuk debugging
export async function GET() {
  return new Response(JSON.stringify({ 
    message: 'API Pendaftaran Peserta Didik',
    methods: ['POST'],
    version: '1.0.0'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}