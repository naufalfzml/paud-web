import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log("Attempting login:", { email, password });

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      console.error("SignIn Error:", signInError.message);

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
        { user: null, message: signInError.message, success: false },
        { status: 500 }
      );
    }

    const response = NextResponse.json(
      {
        user: signInData.user,
        message: "Login berhasil",
        success: true,
        redirectTo: "/",
      },
      { status: 200 }
    );

    if (signInData.session) {
      response.cookies.set("supabase-auth", signInData.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: signInData.session.expires_in,
      });
    }

    return response;
  } catch (error) {
    console.error("Terjadi error saat login:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan di server", error: String(error) },
      { status: 500 }
    );
  }
}
