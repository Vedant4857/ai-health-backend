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

export default router;
