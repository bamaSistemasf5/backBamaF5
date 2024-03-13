import ClientModel from '../models/clientModel.js';


export const createClient = async (req, res) => {
  try {
    const newClient = await ClientModel.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


