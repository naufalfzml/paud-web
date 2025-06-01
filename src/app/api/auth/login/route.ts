import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log("Attempting login:", { email, password });

    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.error("SignIn Error:", signInError.message);

      // Tangani beberapa error spesifik dari Supabase
      if (signInError.message === "Invalid login credentials") {
        return NextResponse.json(
          { user: null, message: "Email atau password salah" },
          { status: 401 }
        );
      }

      if (signInError.message === "Email not confirmed") {
        return NextResponse.json(
          { user: null, message: "Email belum diverifikasi. Cek email kamu!" },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { user: null, message: signInError.message },
        { status: 500 }
      );
    }

    // Optional: Tambahkan token ke cookie (kalau pakai auth persistensi manual)
    // const accessToken = signInData.session?.access_token;

    return NextResponse.json(
      { user: signInData.user, message: "Login berhasil" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Terjadi error saat login:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan di server", error: String(error) },
      { status: 500 }
    );
  }
}