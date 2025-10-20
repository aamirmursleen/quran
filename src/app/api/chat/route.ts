import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy-key-for-build",
});

const SYSTEM_PROMPT = `You are a helpful AI assistant for an Islamic digital library. Your role is to help users find Islamic resources including:

- Quran: Reading, downloading PDFs, audio recitations, translations, Tafsir (commentary)
- Hadith: Authentic collections (Sahih Bukhari, Sahih Muslim, etc.), searching hadiths
- Islamic Books: Aqeedah (belief), Fiqh (jurisprudence), Seerah (biography), Islamic history
- Learning Resources: Arabic language, Islamic studies, lectures, audio books
- Audio: Quran recitations by famous reciters, MP3 downloads, Tajweed lessons

Be helpful, respectful, and knowledgeable. Provide concise but informative answers. When users ask about specific resources, guide them to the relevant sections. Always maintain an Islamic ethos and respectful tone.

If users ask about downloading, listening, or reading Islamic content, enthusiastically help them find what they need in the library.`;

export async function POST(req: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured. Please add OPENAI_API_KEY to environment variables." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...messages.map((msg: { role: "user" | "assistant"; content: string }) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseMessage = completion.choices[0]?.message?.content || "I apologize, I couldn't generate a response. Please try again.";

    return NextResponse.json({
      message: responseMessage,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to get AI response";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
