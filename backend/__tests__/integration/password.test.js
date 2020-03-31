const request = require("supertest");
const app = require("./../../src/app");
const connection = require("./../../src/database/connection");

describe("Passwords", () => {
  //Resetar o banco de dados antes de executar o teste.
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  //Parar a conexão com o banco de dados apos finalizar o teste.
  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create new password', async () => {

  })
});
