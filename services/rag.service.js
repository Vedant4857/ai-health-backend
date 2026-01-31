import { createEmbedding } from "./embedding.service.js";
import { index } from "../config/pinecone.js";
import { textModel } from "../config/gemini.js";
import { explainPrescriptionPrompt } from "../utils/prompts.js";

export async function explainWithRAG(patientId, question, language) {
  const queryEmbedding = await createEmbedding(question);

  const result = await index.query({
    vector: queryEmbedding,
    topK: 3,
    filter: { patientId },
  });

  const context = result.matches
    .map((match) => match.metadata.content)
    .join("\n\n");

  const response = await textModel.generateContent(
    explainPrescriptionPrompt(context, language),
  );

  return response.response.text();
}
