
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async summarizeThoughts(thoughts: string[]): Promise<string | undefined> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `请将以下个人的零碎想法总结为一段简短且具有诗意的精神画像描述：\n\n${thoughts.join('\n')}`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 200,
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini summary failed:", error);
      return undefined;
    }
  }
}

export const geminiService = new GeminiService();
