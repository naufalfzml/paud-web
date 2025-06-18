import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("supabase-auth")?.value;

    if (token) {
      try {
        await supabase.auth.setSession({
          access_token: token,
          refresh_token: "",
        });

        await supabase.auth.signOut();
        console.log("Logged out from Supabase");
      } catch (supabaseError) {
        console.warn("Supabase logout warning:", supabaseError);
      }
    }

    const response = NextResponse.json(
      { message: "Logout berhasil", success: true },
      { status: 200 }
    );

    response.cookies.set("supabase-auth", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
      expires: new Date(0),
    });

    response.cookies.delete("supabase-auth");

    console.log("Auth cookie cleared successfully");

    return response;
  } catch (error) {
    console.error("Logout error:", error);

    const response = NextResponse.json(
      { message: "Logout berhasil (dengan peringatan)", success: true },
      { status: 200 }
    );

    response.cookies.set("supabase-auth", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
      expires: new Date(0),
    });

    response.cookies.delete("supabase-auth");

    return response;
  }
}
