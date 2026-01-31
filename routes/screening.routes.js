import express from "express";
import {
  extractSymptoms,
  generateFollowUp,
} from "../services/conversation.service.js";
import { assessRisk } from "../services/risk.service.js";

const router = express.Router();

router.post("/start", async (req, res) => {
  const { spokenText } = req.body;
  const data = await extractSymptoms(spokenText);
  res.json(data);
});

router.post("/follow-up", async (req, res) => {
  const { context } = req.body;
  const questions = await generateFollowUp(context);
  res.json(questions);
});

router.post("/risk", async (req, res) => {
  const { conversation } = req.body;
  const risk = await assessRisk(conversation);
  res.json(risk);
});
router.post("/start", async (req, res) => {
  try {
    const { spokenText } = req.body;
    const data = await extractSymptoms(spokenText);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "AI service unavailable. Please try again later.",
    });
  }
});

export default router;
