const request = require("supertest");
const app = require("./../../src/app");
const connection = require("./../../src/database/connection");

describe("Users", () => {
  //Resetar o banco de dados antes de executar o teste.
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  //Parar a conexão com o banco de dados apos finalizar o teste.
  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new user", async () => {
    const response = await request(app)
      .post("/user/create")
      .send({
        username: "samuel",
        password: "12345678",
        phone: "75991206853",
        email: "samuel@gmail.com"
      });

    expect(response.body).toHaveProperty("user");
  });

  it("should be able to list all users", async () => {
    const response = await request(app).get("/user");

    expect(response.status).toBe(200);
  });

  it("should be able to delete a user", async () => {
    const response = await request(app)
      .post("/user/update/1")
      .send({
        username: "srsantos"
      });

    expect(response.status).toBe(200);
  });
});
