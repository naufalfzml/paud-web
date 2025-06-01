// src/app/api/auth/register/route.ts
import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma" // Gunakan instance yang sudah dikonfigurasi

const DEBUG = process.env.NODE_ENV === 'development'

function log(message: string, data?: any) {
  if (DEBUG) {
    console.log(`[REGISTER API] ${message}`, data || '')
  }
}

export async function POST(req: Request) {
  log('🔍 POST /api/auth/register - Request received')
  
  try {
    // Parse request body
    log('📝 Parsing request body...')
    const body = await req.json()
    const { name, email, password } = body
    
    log('📋 Request data:', { 
      name: name ? '✓' : '✗', 
      email: email ? '✓' : '✗', 
      password: password ? '✓' : '✗' 
    })

    // Validation
    if (!email || !password) {
      log('❌ Validation failed: Missing email or password')
      return NextResponse.json({ 
        error: "Email & password wajib diisi" 
      }, { status: 400 })
    }

    // Test Prisma connection
    log('🔄 Testing database connection...')
    try {
      await prisma.$connect()
      log('✅ Database connection successful')
    } catch (connectionError) {
      log('❌ Database connection failed:', connectionError)
      return NextResponse.json({ 
        error: "Database connection failed",
        details: DEBUG ? connectionError : undefined
      }, { status: 500 })
    }

    // Check if user exists
    log('🔍 Checking if user already exists...')
    let existingUser
    try {
      existingUser = await prisma.user.findUnique({ 
        where: { email } 
      })
      log('✅ User existence check completed')
    } catch (findError) {
      log('❌ Error checking existing user:', findError)
      return NextResponse.json({ 
        error: "Error checking user existence",
        details: DEBUG ? findError : undefined
      }, { status: 500 })
    }

    if (existingUser) {
      log('⚠️ User already exists with email:', email)
      return NextResponse.json({ 
        error: "Email sudah terdaftar" 
      }, { status: 400 })
    }

    // Hash password
    log('🔐 Hashing password...')
    let hashedPassword
    try {
      hashedPassword = await hash(password, 10)
      log('✅ Password hashed successfully')
    } catch (hashError) {
      log('❌ Error hashing password:', hashError)
      return NextResponse.json({ 
        error: "Error processing password",
        details: DEBUG ? hashError : undefined
      }, { status: 500 })
    }

    // Create user
    log('👤 Creating new user...')
    let user
    try {
      user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword
        }
      })
      log('✅ User created successfully:', { id: user.id, email: user.email })
    } catch (createError) {
      log('❌ Error creating user:', createError)
      return NextResponse.json({ 
        error: "Error creating user",
        details: DEBUG ? createError : undefined
      }, { status: 500 })
    }

    // Remove password from response
    const { password: _, ...userResponse } = user

    log('🎉 Registration completed successfully')
    return NextResponse.json({ 
      message: "Berhasil mendaftar", 
      user: userResponse 
    }, { status: 201 })

  } catch (error) {
    log('❌ Unexpected error in register route:', error)
    
    return NextResponse.json({ 
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
      stack: DEBUG && error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  } finally {
    // Disconnect from database
    try {
      await prisma.$disconnect()
      log('✅ Database disconnected')
    } catch (disconnectError) {
      log('⚠️ Error disconnecting from database:', disconnectError)
    }
  }
}