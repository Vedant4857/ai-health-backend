import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const textModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const visionModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
