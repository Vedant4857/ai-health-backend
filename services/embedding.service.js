import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const embeddingModel = genAI.getGenerativeModel({
  model: "text-embedding-004",
});

export async function createEmbedding(text) {
  const result = await embeddingModel.embedContent(text);
  return result.embedding.values;
}
