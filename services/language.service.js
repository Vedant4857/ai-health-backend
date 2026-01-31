import { textModel } from "../config/gemini.js";
import { detectLanguagePrompt } from "../utils/prompts.js";

export async function detectLanguage(text) {
  const result = await textModel.generateContent(detectLanguagePrompt(text));
  return JSON.parse(result.response.text()).language;
}
