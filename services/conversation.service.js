import { textModel } from "../config/gemini.js";
import {
  extractSymptomsPrompt,
  followUpQuestionPrompt,
} from "../utils/prompts.js";

function safeParseJSON(text) {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

export async function extractSymptoms(spokenText) {
  const result = await textModel.generateContent(
    extractSymptomsPrompt(spokenText),
  );

  return safeParseJSON(result.response.text());
}

export async function generateFollowUp(context) {
  const result = await textModel.generateContent(
    followUpQuestionPrompt(context),
  );

  return safeParseJSON(result.response.text());
}
