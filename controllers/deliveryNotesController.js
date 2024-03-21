import e from 'express';
import { vistaAlbaranesModel } from '../models/deliveryNotesModel.js';

export const createNote = async (req, res) => {
  try {
    const newNote = await vistaAlbaranesModel.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await vistaAlbaranesModel.findAll(); // Utiliza el método `findAll()` para obtener todos los clientes
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error obtaining delivery notes' });
  }
};

export const getNotetById = async (req, res) => { // Cambia el nombre de la función de getClientById a getClientById
  const { id } = req.params;
  try {
    const note = await vistaAlbaranesModel.findByPk(id); // Utiliza el método `findByPk()` para obtener un cliente por su ID
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: 'Delivery note not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error obtaining delivery note' });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params; // Cambia id de No_albaran
  try {
    const [updated] = await vistaAlbaranesModel.update(req.body, {
      where: { No_albaran: id } // Utiliza No_albaran como el identificador único
    });
    if (updated) {
      const updatedNote = await vistaAlbaranesModel.findOne({ where: { No_albaran: id } });
      res.json(updateNote);
    } else {
      res.status(404).json({ error: 'Delivery note not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error updating delivery note' });
  }
}
        
export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await vistaAlbaranesModel.findByPk(id);
    if (note) {
      await note.destroy();
      res.json(note);
    } else {
      res.status(404).json({ error: 'Delivery note not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error deleting delivery note' });
  }
}
