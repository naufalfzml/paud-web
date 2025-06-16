// src/app/api/kritik-saran/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID tidak ditemukan' }, { status: 400 });
  }

  const { error } = await supabase
    .from('KritikSaran')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Gagal menghapus data', details: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data berhasil dihapus' }, { status: 200 });
}
