import { NextResponse } from 'next/server';
import { join } from 'path';
import { readFileSync } from 'fs';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'resume.pdf'); // Adjust if you renamed it
  const fileBuffer = readFileSync(filePath);

  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="David Maguire Resume.pdf"',
      'Cache-Control': 'no-cache',
    },
  });
}