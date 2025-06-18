import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

// Inisialisasi Supabase client dengan error handling
let supabase: any = null;

const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

interface Artikel {
  id?: string;
  judul: string;
  content: string;
  imageUrl?: string;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deskripsiSingkat?: string;
  author: string;
}

interface ErrorResponse {
  error: string;
  details?: string;
  debugInfo?: any;
}

function handleSupabaseError(error: any, operation: string) {
  console.error(`Supabase error during ${operation}:`, error);

  const errorResponse: ErrorResponse = {
    error: `Gagal ${operation}`,
    details: error.message || "Unknown error occurred",
  };

  if (process.env.NODE_ENV === "development") {
    errorResponse.debugInfo = {
      code: error.code,
      hint: error.hint,
      details: error.details,
    };
  }

  return errorResponse;
}

const TABLE_NAME = "ArtikelBerita";

// GET - Mengambil semua artikel atau artikel berdasarkan ID
export async function GET(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "Supabase client not initialized",
          details:
            "Check your environment variables and Supabase configuration",
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const isPublished = searchParams.get("published");

    console.log("GET request - ID:", id, "Published:", isPublished);

    let query = supabase
      .from(TABLE_NAME)
      .select("*")
      .order("createdAt", { ascending: false });

    if (id) {
      const uuidPattern =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidPattern.test(id)) {
        return NextResponse.json(
          { error: "Format ID artikel tidak valid" } as ErrorResponse,
          { status: 400 }
        );
      }
      query = query.eq("id", id);
    }

    if (isPublished === "true") {
      query = query.eq("isPublished", true);
    }

    console.log("Executing Supabase query...");
    const { data, error } = await query;

    if (error) {
      console.error("Supabase query error:", error);
      return NextResponse.json(
        handleSupabaseError(error, "mengambil data artikel"),
        { status: 500 }
      );
    }

    console.log("Query successful, found", data?.length || 0, "articles");

    if (id && (!data || data.length === 0)) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" } as ErrorResponse,
        { status: 404 }
      );
    }

    if (id && data && data.length > 0) {
      return NextResponse.json(data[0]);
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Error in GET /api/artikel:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === "development" ? error : undefined,
      } as ErrorResponse,
      { status: 500 }
    );
  }
}

// POST - Membuat artikel baru
export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "Supabase client not initialized",
          details:
            "Check your environment variables and Supabase configuration",
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const body: Artikel = await request.json();
    console.log("POST request body:", {
      ...body,
      content: body.content?.substring(0, 100) + "...",
    });

    if (!body.judul || !body.content || !body.author) {
      return NextResponse.json(
        { error: "Judul, content, dan author wajib diisi" } as ErrorResponse,
        { status: 400 }
      );
    }

    const currentTime = new Date().toISOString();
    const artikelData = {
      judul: body.judul.trim(),
      content: body.content.trim(),
      imageUrl: body.imageUrl?.trim() || "",
      isPublished: body.isPublished || false,
      deskripsiSingkat: body.deskripsiSingkat?.trim() || "",
      author: body.author.trim(),
      createdAt: currentTime,
      updatedAt: currentTime,
    };

    console.log("Creating article with data:", {
      ...artikelData,
      content: artikelData.content.substring(0, 100) + "...",
    });

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([artikelData])
      .select()
      .single();

    if (error) {
      console.error("Error creating artikel:", error);
      return NextResponse.json(
        handleSupabaseError(error, "membuat artikel baru"),
        { status: 500 }
      );
    }

    console.log("Article created successfully with ID:", data?.id);
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/artikel:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Format JSON tidak valid" } as ErrorResponse,
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === "development" ? error : undefined,
      } as ErrorResponse,
      { status: 500 }
    );
  }
}

// PUT - Mengupdate artikel berdasarkan ID
export async function PUT(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "Supabase client not initialized",
          details:
            "Check your environment variables and Supabase configuration",
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID artikel diperlukan untuk update" } as ErrorResponse,
        { status: 400 }
      );
    }

    const uuidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidPattern.test(id)) {
      return NextResponse.json(
        { error: "Format ID artikel tidak valid" } as ErrorResponse,
        { status: 400 }
      );
    }

    const body: Partial<Artikel> = await request.json();
    console.log("PUT request - ID:", id, "Body keys:", Object.keys(body));

    const updateData = {
      ...body,
      updatedAt: new Date().toISOString(),
    };

    delete updateData.id;
    delete updateData.createdAt;

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating artikel:", error);
      return NextResponse.json(
        handleSupabaseError(error, "mengupdate artikel"),
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" } as ErrorResponse,
        { status: 404 }
      );
    }

    console.log("Article updated successfully:", data.id);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in PUT /api/artikel:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Format JSON tidak valid" } as ErrorResponse,
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === "development" ? error : undefined,
      } as ErrorResponse,
      { status: 500 }
    );
  }
}

// DELETE - Menghapus artikel berdasarkan ID
export async function DELETE(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "Supabase client not initialized",
          details:
            "Check your environment variables and Supabase configuration",
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID artikel diperlukan untuk menghapus" } as ErrorResponse,
        { status: 400 }
      );
    }

    const uuidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidPattern.test(id)) {
      return NextResponse.json(
        { error: "Format ID artikel tidak valid" } as ErrorResponse,
        { status: 400 }
      );
    }

    console.log("DELETE request - ID:", id);

    const { data: artikel, error: fetchError } = await supabase
      .from(TABLE_NAME)
      .select("imageUrl")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error("Error fetching artikel:", fetchError);
      return NextResponse.json(
        handleSupabaseError(fetchError, "mengambil data artikel"),
        { status: 500 }
      );
    }

    if (!artikel) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" } as ErrorResponse,
        { status: 404 }
      );
    }

    if (artikel.imageUrl) {
      try {
        const url = new URL(artikel.imageUrl);
        const pathSegments = url.pathname.split("/");

        const bucketIndex =
          pathSegments.findIndex((segment) => segment === "public") + 1;
        const bucketName = pathSegments[bucketIndex];
        const filePath = pathSegments.slice(bucketIndex + 1).join("/");

        if (bucketName && filePath) {
          const { error: storageError } = await supabase.storage
            .from(bucketName)
            .remove([filePath]);

          if (storageError) {
            console.error("Error deleting image from storage:", storageError);
          } else {
            console.log("Image deleted successfully:", filePath);
          }
        }
      } catch (imageError) {
        console.error("Error processing image deletion:", imageError);
      }
    }

    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

    if (error) {
      console.error("Error deleting artikel:", error);
      return NextResponse.json(
        handleSupabaseError(error, "menghapus artikel"),
        { status: 500 }
      );
    }

    console.log("Article deleted successfully:", id);
    return NextResponse.json(
      { message: "Artikel berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in DELETE /api/artikel:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === "development" ? error : undefined,
      } as ErrorResponse,
      { status: 500 }
    );
  }
}
