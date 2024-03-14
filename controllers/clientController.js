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

export const clientsView = async (req, res) => {
  try {
    const clients = await ClientModel.findAll(); // Utiliza el método `findAll()` para obtener todos los clientes
    res.json(clients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

export const getClientById = async (req, res) => { // Cambia el nombre de la función de getClientById a getClientById
  const { id } = req.params;
  try {
    const client = await ClientModel.findByPk(id); // Utiliza el método `findByPk()` para obtener un cliente por su ID
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
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
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
}
