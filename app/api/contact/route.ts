import { NextResponse } from "next/server";

// Contact form → email via Resend (https://resend.com).
// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      (required) your Resend API key
//   CONTACT_TO_EMAIL    (optional) where submissions go; defaults to Mike
//   CONTACT_FROM_EMAIL  (optional) verified sender, e.g. "ABEARCO Website <website@abearco.org>"

const escapeHtml = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}));
    const { name, email, phone, organization, subject, message } = data ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const n = escapeHtml(name);
    const e = escapeHtml(email);
    const ph = escapeHtml(phone ?? "");
    const org = escapeHtml(organization ?? "");
    const subj = escapeHtml(subject);
    const msg = escapeHtml(message).replace(/\n/g, "<br>");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3D2914; border-bottom: 2px solid #C5582A; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background: #FAF6F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${n}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${e}" style="color: #C5582A;">${e}</a></p>
          ${ph ? `<p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${ph}" style="color: #C5582A;">${ph}</a></p>` : ""}
          ${org ? `<p style="margin: 10px 0;"><strong>Organization/Tribe:</strong> ${org}</p>` : ""}
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subj}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #C5582A;">
            ${msg}
          </div>
        </div>
        <p style="color: #5A3D1E; font-size: 12px;">
          Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} MST
        </p>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { success: false, message: "Email is not configured yet. Please call or email us directly." },
        { status: 500 }
      );
    }

    const to = (process.env.CONTACT_TO_EMAIL || "Mike@abearcodevelopment.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const from = process.env.CONTACT_FROM_EMAIL || "ABEARCO Website <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: String(email),
        subject: `New Contact Form: ${String(subject).slice(0, 150)} from ${String(name).slice(0, 100)}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json(
        { success: false, message: "Failed to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
