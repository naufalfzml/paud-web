import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

type Role = "USER" | "ADMIN";

interface UserUpdateData {
  name?: string;
  address?: string;
  no_hp?: string;
  role?: Role;
  updated_at?: string;
}

function validateEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (process.env.NODE_ENV === "development") {
    console.log("Environment check:");
    console.log("NEXT_PUBLIC_SUPABASE_URL exists:", !!supabaseUrl);
    console.log("SUPABASE_SERVICE_ROLE_KEY exists:", !!supabaseKey);

    if (supabaseUrl) {
      console.log(
        "Supabase URL format:",
        supabaseUrl.startsWith("https://") ? "Valid" : "Invalid"
      );
    }

    if (supabaseKey) {
      console.log("Service Role Key length:", supabaseKey.length);
    }
  }

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing required Supabase environment variables");
  }

  return { supabaseUrl, supabaseKey };
}

function getSupabaseClient() {
  try {
    const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
    return createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
    throw error;
  }
}

function validateUserId(
  userId: string | null,
  required: boolean = true
): string | null {
  if (!userId || userId.trim() === "") {
    if (required) {
      throw new Error("User ID is required and cannot be empty");
    }
    return null;
  }
  return userId.trim();
}

function validateUserUpdateData(data: any): UserUpdateData {
  const { name, address, no_hp, role } = data;

  if (name !== undefined && typeof name !== "string") {
    throw new Error("Name must be a string");
  }

  if (address !== undefined && typeof address !== "string") {
    throw new Error("Address must be a string");
  }

  if (no_hp !== undefined && typeof no_hp !== "string") {
    throw new Error("Phone number must be a string");
  }

  return { name, address, no_hp, role };
}

// GET /api/user?id=userId
export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const userIdParam = searchParams.get("id");

    if (!userIdParam || userIdParam.trim() === "") {
      console.log("Fetching all users...");

      const { data, error } = await supabase
        .from("User")
        .select("*")
        .order("createdAt", { ascending: false });

      if (error) {
        console.error("Supabase error (all users):", error);
        return NextResponse.json(
          { error: "Failed to fetch users data" },
          { status: 500 }
        );
      }

      console.log(`Fetched ${data?.length || 0} users`);
      return NextResponse.json({ users: data || [] });
    }

    const userId = validateUserId(userIdParam, true);

    console.log("Fetching single user with ID:", userId);

    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Supabase error (single user):", error);

      if (error.code === "PGRST116") {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json(
        { error: "Failed to fetch user data" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/user error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    const statusCode = errorMessage.includes("required") ? 400 : 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

// PUT /api/user
export async function PUT(request: Request) {
  try {
    const supabase = getSupabaseClient();

    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { id, ...updateData } = body;
    const userId = validateUserId(id, true);
    const validatedUpdateData = validateUserUpdateData(updateData);

    const hasDataToUpdate = Object.values(validatedUpdateData).some(
      (value) => value !== undefined && value !== null
    );

    if (!hasDataToUpdate) {
      return NextResponse.json(
        { error: "No valid data provided for update" },
        { status: 400 }
      );
    }

    const cleanUpdateData = Object.fromEntries(
      Object.entries(validatedUpdateData).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    const { data, error } = await supabase
      .from("User")
      .update(cleanUpdateData)
      .eq("id", userId)
      .select()
      .single();

    if (error) {
      console.error("Supabase update error:", error);

      if (error.code === "PGRST116") {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json(
        { error: "Failed to update user data" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("PUT /api/user error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    const statusCode =
      errorMessage.includes("required") ||
      errorMessage.includes("must be") ||
      errorMessage.includes("Invalid")
        ? 400
        : 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

// DELETE /api/user
export async function DELETE(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const userId = validateUserId(searchParams.get("id"), true);

    const { data: existingUser, error: checkError } = await supabase
      .from("User")
      .select("id, name")
      .eq("id", userId)
      .single();

    if (checkError) {
      console.error("Supabase check error:", checkError);

      if (checkError.code === "PGRST116") {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json(
        { error: "Failed to check user existence" },
        { status: 500 }
      );
    }

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { error } = await supabase.from("User").delete().eq("id", userId);

    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json(
        { error: "Failed to delete user" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `User ${existingUser.name} deleted successfully`,
    });
  } catch (error) {
    console.error("DELETE /api/user error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    const statusCode = errorMessage.includes("required") ? 400 : 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
