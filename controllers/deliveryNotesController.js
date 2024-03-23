import  DevileryNotesModel from "../models/deliveryNotesModel.js";

export const createNote = async (req, res) => {
  try {
    const newNote = await DevileryNotesModel.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await DevileryNotesModel.findAll();
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error obtaining delivery notes" });
  }
};

export const getNotetById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await DevileryNotesModel.findByPk(id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: "Delivery note not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error obtaining delivery note" });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await DevileryNotesModel.update(req.body, {
      where: { No_albaran: id },
    });
    if (updated) {
      const updatedNote = await DevileryNotesModel.findOne({
        where: { No_albaran: id },
      });
      res.json(updatedNote);
    } else {
      res.status(404).json({ error: "Delivery note not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating delivery note" });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await DevileryNotesModel.findByPk(id);
    if (note) {
      await note.destroy();
      res.json(note);
    } else {
      res.status(404).json({ error: "Delivery note not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting delivery note" });
  }
};
