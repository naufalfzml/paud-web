import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: { name },
        },
      }
    );

    if (signUpError) {
      return NextResponse.json(
        { user: null, message: signUpError.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { user: signUpData.user, message: "Akun telah dibuat" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Terjadi error saat register:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan di server", error: String(error) },
      { status: 500 }
    );
  }
}
