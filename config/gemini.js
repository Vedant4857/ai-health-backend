import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// DEBUG (temporary)
console.log("GEMINI KEY LOADED:", process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const textModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const visionModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
