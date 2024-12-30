import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const result = await model.generateContentStream(prompt);

    let fullResponse = "";
    for await (const chunk of result.stream) {
      fullResponse += chunk.text();
      console.log(fullResponse);
    }

    return NextResponse.json({ response: fullResponse });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: "Failed to generate AI content" }, { status: 500 });
  }
}
