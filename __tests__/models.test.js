import request from "supertest";
import UsersModel from "../models/usersModels.js";

describe("User Model", () => {
  it("should have a id_user, nombre, password and id_rol", () => {
    expect(UsersModel.tableAttributes.id_user).toBeDefined();
    expect(UsersModel.tableAttributes.nombre).toBeDefined();
    expect(UsersModel.tableAttributes.password).toBeDefined();
    expect(UsersModel.tableAttributes.id_rol).toBeDefined();
  });
});
