import { textModel } from "../config/gemini.js";
import { riskAssessmentPrompt } from "../utils/prompts.js";

// ✅ SAFETY FUNCTION (PASTE HERE)
function applySafety(riskResult) {
  if (!riskResult || !riskResult.risk_level) {
    return {
      safeMessage:
        "Is jaankari ke aadhaar par spasht nateeja nahi nikal raha. Doctor ko dikhana behtar hoga.",
    };
  }
  return null;
}

// MAIN RISK FUNCTION
export async function assessRisk(conversation) {
  const result = await textModel.generateContent(
    riskAssessmentPrompt(conversation),
  );

  const riskResult = JSON.parse(result.response.text());

  // ✅ APPLY SAFETY CHECK
  const safety = applySafety(riskResult);
  if (safety) {
    return safety;
  }

  return riskResult;
}
