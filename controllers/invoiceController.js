import e from 'express';
import InvoiceModel from '../models/invoiceModel.js';

export const createInvoice= async (req, res) => {
  try {
    const newInvoice = await InvoiceModel.create(req.body);
    res.status(201).json(newInvoice);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const invoicesView = async (req, res) => {
  try {
    const invoices = await InvoiceModel.findAll(); // Utiliza el método `findAll()` para obtener todos los clientes
    res.json(invoices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener las facturas' });
  }
};

export const getInvoiceById = async (req, res) => { // Cambia el nombre de la función de getClientById a getClientById
  const { id } = req.params;
  try {
    const invoice = await InvoiceModel.findByPk(id); // Utiliza el método `findByPk()` para obtener un cliente por su ID
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener la factura' });
  }
};
export const updateInvoice = async (req, res) => {
  const { id } = req.params; 
  console.log (id)
  try {
    const [updated] = await InvoiceModel.update(req.body, {
      where: { nro_factura: id } // Utiliza cif_cliente como el identificador único
    });
    if (updated) {
      const updatedInvoice = await InvoiceModel.findOne({ where: { nro_factura: id } });
      res.json(updatedInvoice);
    } else {
      res.status(404).json({ error: 'Factura no encontrada' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al actualizar la factura' });
  }
}



        

export const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  try {
    const invoice = await InvoiceModel.findByPk(id);
    if (invoice) {
      await invoice.destroy();
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Factura no encontrada' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al eliminar la factura' });
  }
}
