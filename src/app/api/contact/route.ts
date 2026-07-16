import nodemailer from "nodemailer";

const recipientEmail = "marutielec@rediffmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !message) {
      return new Response(JSON.stringify({ message: "Please fill in all required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.rediffmail.com",
      port: 465,
      secure: true,
      auth: {
        user: recipientEmail,
        pass: process.env.REDDIFMAIL_PASSWORD || "",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailBody = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service || "N/A"}\nMessage: ${message}`;

    await transporter.sendMail({
      from: recipientEmail,
      to: recipientEmail,
      subject: `Website Contact Enquiry from ${name}`,
      text: mailBody,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service || "N/A"}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Enquiry submitted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Unable to send enquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
