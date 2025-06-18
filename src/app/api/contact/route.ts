import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/app/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "nephtalemwoldeyohanes@gmail.com",
      subject: `New Contact Message from ${name}`,
      react: ContactEmail({ name, email, message }),
      replyTo: email,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
