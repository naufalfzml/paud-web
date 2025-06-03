import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    console.log("Checking auth...");
    
    // Ambil token dari cookie
    const token = req.cookies.get('supabase-auth')?.value;
    
    if (!token) {
      console.log("No auth token found in cookies");
      return NextResponse.json(
        { user: null, message: "No authentication token" },
        { status: 401 }
      );
    }

    console.log("Token found, verifying with Supabase...");

    // Verifikasi token dengan Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error("Token verification error:", error.message);
      
      // Hapus cookie yang tidak valid
      const response = NextResponse.json(
        { user: null, message: "Invalid or expired token" },
        { status: 401 }
      );
      
      response.cookies.set('supabase-auth', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
        path: '/',
        expires: new Date(0)
      });

      return response;
    }

    if (!user) {
      console.log("No user found for token");
      return NextResponse.json(
        { user: null, message: "No user found" },
        { status: 401 }
      );
    }

    console.log("User verified:", user.email);

    // Return user data
    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error("Auth check server error:", error);
    return NextResponse.json(
      { user: null, message: "Server error during auth check" },
      { status: 500 }
    );
  }
}