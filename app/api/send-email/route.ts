import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const data = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true si usás 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje: ${data.subject}`,
      text: `
        Nombre: ${data.name}
        Email: ${data.email}
        Asunto: ${data.subject}
        Mensaje: ${data.message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error })
  }
}
