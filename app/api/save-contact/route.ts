import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ?? "6cec701e-93b3-4355-ba10-f0dc0d66ea83";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_MESSAGE = 5000;

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  // Honeypot — bots will fill this; real users won't see it.
  website?: string;
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: silently accept and drop bot submissions so they don't retry.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ message: "Thanks." }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const w3Response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New contact form submission from ${name}`,
        from_name: "Chiselbyte contact form",
        replyto: email,
        name,
        email,
        message,
      }),
    });

    const result = await w3Response.json().catch(() => ({}));

    if (!w3Response.ok || result.success === false) {
      console.error("[contact] Web3Forms rejected submission:", result);
      return NextResponse.json(
        { error: "Failed to send your message. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch (err) {
    console.error("[contact] Web3Forms request failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please email us directly." },
      { status: 502 },
    );
  }
}
