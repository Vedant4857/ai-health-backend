import { visionModel } from "../config/gemini.js";
import { prescriptionOCRPrompt } from "../utils/prompts.js";
import { createEmbedding } from "./embedding.service.js";
import { index } from "../config/pinecone.js";

export async function processPrescriptionImage(file, patientId) {
  const result = await visionModel.generateContent([
    prescriptionOCRPrompt,
    {
      inlineData: {
        mimeType: file.mimetype,
        data: file.buffer.toString("base64"),
      },
    },
  ]);

  const text = result.response.text();

  const embedding = await createEmbedding(text);

  await index.upsert([
    {
      id: `prescription-${Date.now()}`,
      values: embedding,
      metadata: {
        patientId,
        type: "doctor_prescription",
        content: text,
      },
    },
  ]);

  return text;
}
