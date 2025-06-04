// src/app/api/user/route.ts
import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Debugging function untuk memeriksa environment variables
function validateEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log("Environment check:");
  console.log("NEXT_PUBLIC_SUPABASE_URL exists:", !!supabaseUrl);
  console.log("SUPABASE_SERVICE_ROLE_KEY exists:", !!supabaseKey);

  if (supabaseUrl) {
    console.log(
      "Supabase URL format:",
      supabaseUrl.startsWith("https://") ? "Valid" : "Invalid"
    );
    console.log("Supabase URL length:", supabaseUrl.length);
  }

  if (supabaseKey) {
    console.log("Service Role Key length:", supabaseKey.length);
    console.log(
      "Service Role Key starts with:",
      supabaseKey.substring(0, 10) + "..."
    );
  }

  return { supabaseUrl, supabaseKey };
}

export async function GET(request: Request) {
  let supabase: any = null;

  const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
  if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  let supabase: any = null;

  const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
  if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  const body = await request.json();
  const { id, name, address, no_hp } = body;

  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("User")
    .update({
      name,
      address,
      no_hp,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
