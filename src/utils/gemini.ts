import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini API key from .env.local
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

function hasTextMethod(obj: any): obj is { text: () => Promise<string> } {
  return obj && typeof obj.text === 'function';
}

export async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = result.response;

    if (hasTextMethod(response)) {
      return await response.text();
    }
    return JSON.stringify(response);
  } catch (error) {
    console.error('Gemini API error:', error);
    return 'Sorry, something went wrong while generating a response.';
  }
}

// New function to list available models
export async function listModels() {
  try {
    const models = await genAI.listModels();
    console.log('Available models:', models);
    return models;
  } catch (error) {
    console.error('Error listing models:', error);
  }
}
