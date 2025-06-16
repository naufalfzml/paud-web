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
  }

  if (supabaseKey) {
    console.log('Service Role Key starts with:', supabaseKey.substring(0, 10) + '...');
  }

  return { supabaseUrl, supabaseKey };
}

let supabase: ReturnType<typeof createClient> | null = null;
const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// Interface
interface KritikSaran {
  id?: string;
  userId?: string;
  saran?: string;
  kritik?: string;
  createdAt?: string;
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

const TABLE_NAME = 'KritikSaran';

// GET - Ambil semua kritik/saran
export async function GET(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: 'Supabase client not initialized',
          details: 'Cek environment variable Supabase'
        },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from('KritikSaran')
      .select(`
        *,
        User ( name )
      `)
      .order('createdAt', { ascending: false });

    if (error) {
      return NextResponse.json(
        {
          error: 'Gagal mengambil data kritik/saran',
          details: error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json(data || []);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Terjadi kesalahan server',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
}




// POST - Buat kritik/saran baru
export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: 'Supabase client not initialized',
          details: 'Check your environment variables and Supabase configuration'
        },
        { status: 500 }
      );
    }

    const body: KritikSaran = await request.json();

    if (!body.kritik?.trim() && !body.saran?.trim()) {
      return NextResponse.json(
        { error: 'Silahkan isi Kritik atau Saran' },
        { status: 400 }
      );
    }

    const kritikSaranData = {
      kritik: body.kritik?.trim() || null,
      saran: body.saran?.trim() || null,
      userId: body.userId || null,
      createdAt: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([kritikSaranData])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        handleSupabaseError(error, 'menyimpan kritik/saran'),
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Format JSON tidak valid' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: (error as Error).message,
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
