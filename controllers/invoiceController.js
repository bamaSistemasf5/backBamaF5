import PDFDocument from 'pdfkit';
import fs from 'fs';
import InvoiceModel from '../models/invoiceModel.js';

export const invoicesView = async (req, res) => {
  try {
    const invoices = await InvoiceModel.findAll();
    res.json(invoices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener las facturas' });
  }
};

export const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await InvoiceModel.findByPk(id);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Factura no encontrada' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener la factura' });
  }
};

export const downloadInvoicePDF = async (req, res) => {
  const { id } = req.params;
  try {
    const invoiceData = await InvoiceModel.findByPk(id);
    if (!invoiceData) {
      return res.status(404).json({ error: 'Factura no encontrada' });
    }

    // Crear un nuevo documento PDF
    const doc = new PDFDocument();
    // Definir el nombre del archivo PDF
    const fileName = `invoice_${invoiceData.nro_factura}.pdf`;

    // Genera el documento PDF
    doc.pipe(fs.createWriteStream(fileName));

    // Escribe los datos de la factura en el PDF
    doc.text(`Número de factura: ${invoiceData.nro_factura}`);
    doc.text(`Fecha: ${invoiceData.fecha}`);
    // Añade más información de la factura según sea necesario

    doc.end();

    // Envía el PDF como una respuesta al navegador
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    doc.pipe(res);

  } catch (error) {
    console.error('Error al generar y descargar el PDF:', error);
    res.status(500).send('Error al generar y descargar el PDF.');
  }
};
