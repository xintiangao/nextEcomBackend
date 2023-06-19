import { PrismaClient, Prisma } from '@prisma/client'
import request from "supertest"
import app from "../../app.js"

async function cleanupDatabase() {
    const prisma = new PrismaClient();
    const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);
  
    return Promise.all(
      modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany())
    );
  }
  
  describe("POST /auth", () => {
    const user = {
      name: 'John',
      email: 'john9@example.com',
      password: 'insecure',
    }
  
    beforeAll(async () => {
      await cleanupDatabase()
  
    })
  
    afterAll(async () => {
      await cleanupDatabase()
    })
  
    it("with valid data should return 200", async () => {
      const response = await request(app)
        .post("/users")
        .send(user)
        .set('Accept', 'application/json')
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBeTruthy;
      expect(response.body.name).toBe(user.name);
      expect(response.body.email).toBe(user.email);
      expect(response.body.password).toBe(undefined);
    });

    it("access token should return after validation", async () => {
        const response = await request(app)
          .post("/auth")
          .send(user)
          .set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
        expect(response.body.accessToken).toBeTruthy;
      });

      it("access token should not return after wrong email", async () => {
        user.email= 'wrongemail@example.com'
        const response = await request(app)
          .post("/auth")
          .send(user)
          .set('Accept', 'application/json')
        expect(response.statusCode).toBe(401);
        expect(response.body.accessToken).toBeFalsy;
      });

      it("access token should not return after wrong password", async () => {
        user.password= 'wrongpassword'
        const response = await request(app)
          .post("/auth")
          .send(user)
          .set('Accept', 'application/json')
        expect(response.statusCode).toBe(401);
        expect(response.body.accessToken).toBeFalsy;
      });
})



