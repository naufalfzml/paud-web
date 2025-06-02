import { NextRequest, NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

// Debugging function untuk memeriksa environment variables
function validateEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  console.log('Environment check:');
  console.log('NEXT_PUBLIC_SUPABASE_URL exists:', !!supabaseUrl);
  console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!supabaseKey);
  
  if (supabaseUrl) {
    console.log('Supabase URL format:', supabaseUrl.startsWith('https://') ? 'Valid' : 'Invalid');
    console.log('Supabase URL length:', supabaseUrl.length);
  }
  
  if (supabaseKey) {
    console.log('Service Role Key length:', supabaseKey.length);
    console.log('Service Role Key starts with:', supabaseKey.substring(0, 10) + '...');
  }
  
  return { supabaseUrl, supabaseKey };
}

// Inisialisasi Supabase client dengan error handling
let supabase: any = null;

// Interface untuk artikel
interface Artikel {
  id?: number;
  judul: string;
  content: string;
  imageUrl?: string;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deskripsiSingkat?: string;
  author: string;
}

// Interface untuk response error
interface ErrorResponse {
  error: string;
  details?: string;
  debugInfo?: any;
}

// Helper function untuk menangani error Supabase
function handleSupabaseError(error: any, operation: string) {
  console.error(`Supabase error during ${operation}:`, error);
  
  const errorResponse: ErrorResponse = {
    error: `Gagal ${operation}`,
    details: error.message || 'Unknown error occurred'
  };
  
  if (process.env.NODE_ENV === 'development') {
    errorResponse.debugInfo = {
      code: error.code,
      hint: error.hint,
      details: error.details
    };
  }
  
  return errorResponse;
}

// GET - Mengambil semua artikel atau artikel berdasarkan ID
export async function GET(request: NextRequest) {
  try {
    // Cek apakah Supabase client berhasil diinisialisasi
    if (!supabase) {
      return NextResponse.json(
        { 
          error: 'Supabase client not initialized',
          details: 'Check your environment variables and Supabase configuration'
        } as ErrorResponse,
        { status: 500 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const isPublished = searchParams.get('published');

    console.log('GET request - ID:', id, 'Published:', isPublished);

    let query = supabase
      .from('artikel')
      .select('*')
      .order('createdAt', { ascending: false });

    // Filter berdasarkan ID jika ada
    if (id) {
      const numericId = parseInt(id);
      if (isNaN(numericId)) {
        return NextResponse.json(
          { error: 'ID artikel harus berupa angka' } as ErrorResponse,
          { status: 400 }
        );
      }
      query = query.eq('id', numericId);
    }

    // Filter hanya artikel yang dipublikasi jika parameter published=true
    if (isPublished === 'true') {
      query = query.eq('isPublished', true);
    }

    console.log('Executing Supabase query...');
    const { data, error } = await query;

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json(
        handleSupabaseError(error, 'mengambil data artikel'),
        { status: 500 }
      );
    }

    console.log('Query successful, found', data?.length || 0, 'articles');

    // Jika mencari berdasarkan ID dan tidak ditemukan
    if (id && (!data || data.length === 0)) {
      return NextResponse.json(
        { error: 'Artikel tidak ditemukan' } as ErrorResponse,
        { status: 404 }
      );
    }

    // Jika mencari berdasarkan ID, kembalikan objek tunggal
    if (id && data && data.length > 0) {
      return NextResponse.json(data[0]);
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error in GET /api/artikel:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
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
          error: 'Supabase client not initialized',
          details: 'Check your environment variables and Supabase configuration'
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const body: Artikel = await request.json();
    console.log('POST request body:', { ...body, content: body.content?.substring(0, 100) + '...' });

    // Validasi data yang diperlukan
    if (!body.judul || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Judul, content, dan author wajib diisi' } as ErrorResponse,
        { status: 400 }
      );
    }

    const currentTime = new Date().toISOString();
    const artikelData = {
      judul: body.judul.trim(),
      content: body.content.trim(),
      imageUrl: body.imageUrl?.trim() || '',
      isPublished: body.isPublished || false,
      deskripsiSingkat: body.deskripsiSingkat?.trim() || '',
      author: body.author.trim(),
      createdAt: currentTime,
      updatedAt: currentTime,
    };

    console.log('Creating article with data:', { ...artikelData, content: artikelData.content.substring(0, 100) + '...' });

    const { data, error } = await supabase
      .from('artikel')
      .insert([artikelData])
      .select()
      .single();

    if (error) {
      console.error('Error creating artikel:', error);
      return NextResponse.json(
        handleSupabaseError(error, 'membuat artikel baru'),
        { status: 500 }
      );
    }

    console.log('Article created successfully with ID:', data?.id);
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/artikel:', error);
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Format JSON tidak valid' } as ErrorResponse,
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
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
          error: 'Supabase client not initialized',
          details: 'Check your environment variables and Supabase configuration'
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID artikel diperlukan untuk update' } as ErrorResponse,
        { status: 400 }
      );
    }

    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      return NextResponse.json(
        { error: 'ID artikel harus berupa angka' } as ErrorResponse,
        { status: 400 }
      );
    }

    const body: Partial<Artikel> = await request.json();
    console.log('PUT request - ID:', numericId, 'Body keys:', Object.keys(body));

    const updateData = {
      ...body,
      updatedAt: new Date().toISOString(),
    };

    // Hapus field yang tidak boleh diupdate secara manual
    delete updateData.id;
    delete updateData.createdAt;

    const { data, error } = await supabase
      .from('artikel')
      .update(updateData)
      .eq('id', numericId)
      .select()
      .single();

    if (error) {
      console.error('Error updating artikel:', error);
      return NextResponse.json(
        handleSupabaseError(error, 'mengupdate artikel'),
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Artikel tidak ditemukan' } as ErrorResponse,
        { status: 404 }
      );
    }

    console.log('Article updated successfully:', data.id);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in PUT /api/artikel:', error);
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Format JSON tidak valid' } as ErrorResponse,
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
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
          error: 'Supabase client not initialized',
          details: 'Check your environment variables and Supabase configuration'
        } as ErrorResponse,
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID artikel diperlukan untuk menghapus' } as ErrorResponse,
        { status: 400 }
      );
    }

    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      return NextResponse.json(
        { error: 'ID artikel harus berupa angka' } as ErrorResponse,
        { status: 400 }
      );
    }

    console.log('DELETE request - ID:', numericId);

    const { error } = await supabase
      .from('artikel')
      .delete()
      .eq('id', numericId);

    if (error) {
      console.error('Error deleting artikel:', error);
      return NextResponse.json(
        handleSupabaseError(error, 'menghapus artikel'),
        { status: 500 }
      );
    }

    console.log('Article deleted successfully:', numericId);
    return NextResponse.json(
      { message: 'Artikel berhasil dihapus' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in DELETE /api/artikel:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
      } as ErrorResponse,
      { status: 500 }
    );
  }
}