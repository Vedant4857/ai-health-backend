import { textModel } from "../config/gemini.js";
import {
  extractSymptomsPrompt,
  followUpQuestionPrompt,
} from "../utils/prompts.js";

export async function extractSymptoms(spokenText) {
  const result = await textModel.generateContent(
    extractSymptomsPrompt(spokenText),
  );
  return JSON.parse(result.response.text());
}

export async function generateFollowUp(context) {
  const result = await textModel.generateContent(
    followUpQuestionPrompt(context),
  );
  return JSON.parse(result.response.text());
}
