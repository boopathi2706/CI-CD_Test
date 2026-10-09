const request = require("supertest");
const app = require("./server");

describe("Backend API Tests", () => {
  test("GET /user returns Arun's details", async () => {
    const response = await request(app).get("/user");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "arun",
      age: 25,
    });
  });

  test("GET /id?id=22 returns Boopathi's details", async () => {
    const response = await request(app).get("/id?id=22");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "boopathiv",
      age: 21,
    });
  });

  test("GET /id with an invalid ID returns 404", async () => {
    const response = await request(app).get("/id?id=10");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: "User not found",
    });
  });
});