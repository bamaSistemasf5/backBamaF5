import server from '../server.js';
import request from 'supertest';

describe ("GET Clients", ()=>{
    test("should return status code 200 when clients has been called", async ()=>{
        const response = await request(server).get("/client/clients");
        expect(response.status).toBe(200);

    }); 
});


  describe("GET Single Client with body", () => {
    test("should return status code 200 when a single client has been called", async () => {
      const clientId = 88888888;
      const response = await request(server).get(`/client/client/${clientId}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ cif_cliente: "88888888", codigo_postal: "28038", nombre: 'Lucía', direccion: 'Avenida Fernando Poo 50', email: "Lucia@org.com", telefono : "1234567", pais: "Madrid", poblacion: "Madrid", provincia: "Madrid" });
    });
  });
  
  describe("POST Create Client", () => {
    test("should return status code 201 when creating a client", async () => {
      // Supongamos que estos son los datos del cliente que deseamos crear
      const clientData = {
        cif_cliente: "88888883",
        nombre: "John Doe ltda",
        direccion: "Calle Serrano 40",
        poblacion:"Madrid",
        provincia:" Madrid",
        pais: "España",
        codigo_postal: "28023",
        telefono: "635619349",
        email: "john@example.com",
      };
  
      const response = await request(server)
        .post("/client/create-client")
        .send(clientData);
  
      expect(response.status).toBe(201);
      // También puedes verificar algunos detalles adicionales del cliente creado, si lo deseas
      // Por ejemplo, verificar que el cuerpo de la respuesta contenga los datos del cliente creado
      // expect(response.body.name).toBe(clientData.name);
      // expect(response.body.email).toBe(clientData.email);
      // ...
    });
  });
  