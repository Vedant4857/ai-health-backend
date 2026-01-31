import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const textModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const visionModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
