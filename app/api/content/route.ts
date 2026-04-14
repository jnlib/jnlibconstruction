import { NextRequest, NextResponse } from "next/server";
import { getContent, saveContent } from "@/app/lib/content-store";
import type { SiteContent } from "@/app/lib/content";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as SiteContent;
  await saveContent(body);
  return NextResponse.json({ ok: true });
}
