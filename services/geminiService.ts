import { GoogleGenAI, Type } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export interface StylistResponse {
  message: string;
  recommendedProductIds: string[];
}

export const getStylistRecommendation = async (userQuery: string): Promise<StylistResponse> => {
  const client = initializeAI();
  if (!client) {
    console.warn("Gemini API Key missing");
    return {
      message: "I am currently unable to connect to the styling server. However, feel free to browse our collection manually!",
      recommendedProductIds: []
    };
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                message: { type: Type.STRING },
                recommendedProductIds: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                }
            }
        }
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as StylistResponse;

  } catch (error) {
    console.error("AI Stylist Error:", error);
    return {
      message: "I'm having trouble curating a look right now. Please try asking differently.",
      recommendedProductIds: []
    };
  }
};
