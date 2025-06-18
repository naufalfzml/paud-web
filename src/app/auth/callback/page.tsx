"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const fragment = window.location.hash;
    const params = new URLSearchParams(fragment.replace("#", "?"));

    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      supabase.auth
        .setSession({
          access_token,
          refresh_token,
        })
        .then(() => {
          router.replace("/dashboard");
        });
    } else {
      console.error("Token tidak ditemukan di URL");
      router.replace("/login");
    }
  }, []);

  return <p>Verifikasi selesai, mengalihkan...</p>;
}
