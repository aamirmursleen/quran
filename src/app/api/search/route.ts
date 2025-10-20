import { NextRequest, NextResponse } from "next/server";
import { searchSurahs } from "@/lib/searchSurahs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const revelationFilter = searchParams.get("revelation");
  const limit = Number(searchParams.get("limit") ?? 114);
  const results = searchSurahs(searchParams.get("q") ?? "", revelationFilter, limit);

  return NextResponse.json({
    query: searchParams.get("q") ?? "",
    revelation: revelationFilter ?? "all",
    count: results.length,
    results,
  });
}
