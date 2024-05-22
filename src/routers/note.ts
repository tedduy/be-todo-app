import { Router } from "express";
import { create, getAllNotes, getSingleNote, removedSingleNote, updateSingleNote } from "../controllers/note";

const router = Router();

router.patch("/:noteId", updateSingleNote);

router.delete("/:noteId", removedSingleNote);

router.get("/", getAllNotes)

router.get("/:noteId", getSingleNote)

router.post("/create", create);

export default router;