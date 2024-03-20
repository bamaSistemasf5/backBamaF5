import e from "express";
import deliveryNotesModel from "../models/deliveryNotesModel.js";

export const createNote = async (req, res) => {
  try {
    const newNote = await deliveryNotesModel.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const readAllNotes = async (req, res) => {
  try { 
    const notes = await deliveryNotesModel.findAll(); 
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener los clientes" });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await deliveryNotesModel.findByPk(); // Utiliza el método `findByPk()` para obtener un cliente por su ID
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: "Nota no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener la nota" });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await ClientModel.update(req.body, {
      where: { cif_cliente: id }, // Utiliza cif_cliente como el identificador único
    });
    if (updated) {
      const updatedClient = await ClientModel.findOne({
        where: { cif_cliente: id },
      });
      res.json(updatedClient);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  try {
    const client = await ClientModel.findByPk(id);
    if (client) {
      await client.destroy();
      res.json(client);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
};
