import express from "express";
import {
  AskQuestion,
  askAllQuestions,
  deleteQuestion,
  voteQuestion,
} from "../controllers/Questions.js";
import auth from "../middlewares/auth.js";
const router = express.Router();
router.post("/Ask", auth, AskQuestion);
router.get("/get", askAllQuestions);
router.delete("/delete/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQuestion);
export default router;
