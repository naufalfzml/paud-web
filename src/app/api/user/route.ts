// src/app/api/user/route.ts
import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Types for better type safety
interface UserUpdateData {
  name?: string;
  address?: string;
  no_hp?: string;
  updated_at?: string;
}

// Environment validation with better error messages
function validateEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Only log in development
  if (process.env.NODE_ENV === 'development') {
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

// Create Supabase client with error handling
function getSupabaseClient() {
  try {
    const { supabaseUrl, supabaseKey } = validateEnvironmentVariables();
    return createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
    throw error;
  }
}

// Validation helpers
function validateUserId(userId: string | null): string {
  if (!userId || userId.trim() === '') {
    throw new Error("User ID is required and cannot be empty");
  }
  return userId.trim();
}

function validateUserUpdateData(data: any): UserUpdateData {
  const { name, address, no_hp } = data;
  
  // Basic validation - add more as needed
  if (name !== undefined && typeof name !== 'string') {
    throw new Error("Name must be a string");
  }
  
  if (address !== undefined && typeof address !== 'string') {
    throw new Error("Address must be a string");
  }
  
  if (no_hp !== undefined && typeof no_hp !== 'string') {
    throw new Error("Phone number must be a string");
  }

  return { name, address, no_hp };
}

// GET /api/user?id=userId
export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const userId = validateUserId(searchParams.get("id"));

    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      
      // Handle specific Supabase errors
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: "User not found" }, 
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to fetch user data" }, 
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "User not found" }, 
        { status: 404 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("GET /api/user error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    const statusCode = errorMessage.includes("required") ? 400 : 500;
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: statusCode }
    );
  }
}

// PUT /api/user
export async function PUT(request: Request) {
  try {
    const supabase = getSupabaseClient();
    
    // Parse and validate request body
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
    const userId = validateUserId(id);
    const validatedUpdateData = validateUserUpdateData(updateData);

    // Check if there's actually data to update
    const hasDataToUpdate = Object.values(validatedUpdateData).some(
      value => value !== undefined && value !== null
    );

    if (!hasDataToUpdate) {
      return NextResponse.json(
        { error: "No valid data provided for update" }, 
        { status: 400 }
      );
    }

    // Remove undefined values from update data
    const cleanUpdateData = Object.fromEntries(
      Object.entries(validatedUpdateData).filter(([_, value]) => 
        value !== undefined && value !== null && value !== ''
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
      
      // Handle specific Supabase errors
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: "User not found" }, 
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to update user data" }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      data: data 
    });

  } catch (error) {
    console.error("PUT /api/user error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    const statusCode = errorMessage.includes("required") || 
                      errorMessage.includes("must be") || 
                      errorMessage.includes("Invalid") ? 400 : 500;
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: statusCode }
    );
  }
}