import { textModel } from "../config/gemini.js";
import { riskAssessmentPrompt } from "../utils/prompts.js";

export async function assessRisk(conversation) {
  const result = await textModel.generateContent(
    riskAssessmentPrompt(conversation),
  );
  return JSON.parse(result.response.text());
}
