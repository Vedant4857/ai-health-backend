import express from "express";
import multer from "multer";
import { processPrescriptionImage } from "../services/prescription.service.js";
import { explainWithRAG } from "../services/rag.service.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), async (req, res) => {
  const { patientId } = req.body;
  const text = await processPrescriptionImage(req.file, patientId);
  res.json({ stored: true, extractedText: text });
});

router.post("/explain", async (req, res) => {
  const { patientId, question, language } = req.body;
  const explanation = await explainWithRAG(patientId, question, language);
  res.json({ explanation });
});

export default router;
