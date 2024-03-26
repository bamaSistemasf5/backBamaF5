import db from "../database/db.js";
import request from 'supertest';

describe("Database Connection", () => {
  afterAll(async () => {
    await db.close();
  });
  it("should authenticate successfully", async () => {
    try {
      await db.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(true).toBe(false);
    }
  });
});