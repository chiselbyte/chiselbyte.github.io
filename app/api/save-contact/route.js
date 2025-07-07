import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "contact-submissions.json");

export async function POST(request) {
  try {
    const body = await request.json();
    // Ensure data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });
    let submissions = [];
    try {
      const file = await fs.readFile(FILE_PATH, "utf-8");
      submissions = JSON.parse(file);
      if (!Array.isArray(submissions)) submissions = [];
    } catch (e) {
      // File does not exist or is invalid, start fresh
      submissions = [];
    }
    submissions.push({ ...body, createdAt: new Date().toISOString() });
    await fs.writeFile(FILE_PATH, JSON.stringify(submissions, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
