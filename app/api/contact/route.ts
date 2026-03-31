import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Add your email service here (SendGrid, Resend, Nodemailer, etc.)
    console.log("Contact form submission:", { name, email, message });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}