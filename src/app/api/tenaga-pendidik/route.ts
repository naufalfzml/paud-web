// app/api/tenaga-pendidik/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET - Fetch all teachers
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("TenagaPendidik")
      .select("*")
      .order("createdAt", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch teachers", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create new teacher
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const requiredFields = ["fullName", "nip", "email"];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const { data: existingTeacher, error: checkError } = await supabase
      .from("TenagaPendidik")
      .select("id, nip, email")
      .or(`nip.eq.${body.nip},email.eq.${body.email}`);

    if (checkError) {
      console.error("Error checking existing teacher:", checkError);
      return NextResponse.json(
        {
          error: "Failed to validate teacher data",
          details: checkError.message,
        },
        { status: 500 }
      );
    }

    if (existingTeacher && existingTeacher.length > 0) {
      const duplicate = existingTeacher[0];
      const duplicateField = duplicate.nip === body.nip ? "NIP" : "Email";
      return NextResponse.json(
        { error: `${duplicateField} sudah terdaftar` },
        { status: 409 }
      );
    }

    const teacherData = {
      fullName: body.fullName,
      nip: body.nip,
      email: body.email,
      alamat: body.alamat || null,
      noHp: body.noHp || null,
      pendidikanTerakhir: body.pendidikanTerakhir || null,
      ttl: body.ttl || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("TenagaPendidik")
      .insert([teacherData])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to create teacher", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update teacher by ID
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing teacher ID in query parameter" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const updateData = {
      ...body,
      updatedAt: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("TenagaPendidik")
      .update(updateData)
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json(
        { error: "Failed to update teacher", details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete teacher by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing teacher ID" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("TenagaPendidik")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json(
        { error: "Failed to delete teacher", details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
