import nodemailer from "nodemailer";

const recipientEmail = "marutielec@rediffmail.com";
const senderEmail = "marutielectricals0007@gmail.com";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please submit valid form details." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return Response.json({ message: "Please submit valid form details." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const phone = typeof fields.phone === "string" ? fields.phone.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const service = typeof fields.service === "string" ? fields.service.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (!name || !phone || !email || !message) {
    return Response.json({ message: "Please fill in all required fields." }, { status: 400 });
  }

  if (
    name.length > 120 ||
    phone.length > 40 ||
    email.length > 254 ||
    service.length > 120 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ message: "Please check your form details and try again." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER || senderEmail;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpPassword || !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    console.error("Contact form email delivery is not configured correctly.");
    return Response.json(
      { message: "Email delivery is not configured. Please contact the site administrator." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      replyTo: email,
      subject: "New website contact enquiry",
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ message: "Your enquiry has been sent successfully." });
  } catch (error) {
    console.error("Unable to deliver contact form enquiry:", error);
    return Response.json(
      { message: "Unable to send your enquiry right now. Please try again later." },
      { status: 500 }
    );
  }
}
