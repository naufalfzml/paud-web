import prisma  from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = body;

        //check email
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "Email sudah digunakan"}, {status: 409})
        }


        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
                role: "USER"
            }
        })
        
        return NextResponse.json({
            user: newUser,
            message: "Akun telah dibuat"
        }, {status: 201});
    } catch(error) {
        console.error("Terjadi error saat register:", error);
        return NextResponse.json(
            { message: "Terjadi kesalahan di server", error: String(error) },
            { status: 500 }
        );
    }
}