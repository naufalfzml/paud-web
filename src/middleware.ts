import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "./lib/supabase";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from "./lib/AuthContext";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  // Ambil session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Jika tidak ada session, bisa redirect atau tolak
  if (!session?.user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const userId = session.user.id;

  const { data: userData, error } = await supabase
    .from("User")
    .select("role")
    .eq("id", userId)
    .single();

  if (error || !userData) {
    console.error("Gagal ambil role user:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (userData.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.redirect(new URL("/", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin-page/:path*",
};
