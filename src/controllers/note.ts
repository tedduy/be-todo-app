import { RequestHandler } from "express";
import Note, { NoteDocument } from "../models/note";

export interface IncomingBody {
  title: string;
  description: string;
}

export const create: RequestHandler = async (req, res) => {
  // console.log(req.body);
  // const newNote = new Note<NoteDocument>({
  //   title: (req.body as IncomingBody).title,
  //   description: (req.body as IncomingBody).description,
  // })

  // await newNote.save();

  const newNote = await Note.create<NoteDocument>({
    title: (req.body as IncomingBody).title,
    description: (req.body as IncomingBody).description,
  });
  res.json({
    note: {
      id: newNote._id,
      title: newNote.title,
      description: newNote.description,
    },
  });
};

export const updateSingleNote: RequestHandler = async (req, res) => {
  // const { noteId } = req.params;
  // const note = await Note.findById(noteId);
  // if (!note) return res.json({ message: "Note is not founded" });

  // const { title, description } = req.body as IncomingBody;
  // if (title) note.title = title;
  // if (description) note.description = description;

  const { noteId } = req.params;
  const { title, description } = req.body as IncomingBody;
  const note = await Note.findByIdAndUpdate(
    noteId,
    { title, description },
    { new: true }
  );
  if (!note) return res.json({ message: "Node not found" });
  await note.save();

  res.json({ note:{
    title: note.title,
    description: note.description,
  }});
};

export const removedSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const removedNote = await Note.findByIdAndDelete(noteId);
  if (!removedNote) return res.json({ error: "Could not found" });

  res.json({ message: "Node removed" });
};

export const getAllNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes: notes.map((note) =>{
    return {
      id: note._id,
      title: note.title,
      description: note.description,
    } 
  })  });
};

export const getSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);
  if (!note) return res.json({ error: "Note not found" });
  res.json({ note });
};
