// import { PrismaClient } from '@prisma/client';
// import request from 'supertest';
// import app from '../../app';

// async function cleanupDatabase() {
//   const prisma = new PrismaClient();
//   const modelNames = prisma.$dmmf.datamodel.models.map((model) => model.name);

//   return Promise.all(
//     modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany())
//   );
// }

// describe('POST /photos', () => {
//   let authToken; // Store the authentication token

//   const validPhotoData = {
//     price: '10.99',
//     title: 'testPhoto',
//     description: 'testDescription',
//   };

//   beforeAll(async () => {
//     await cleanupDatabase();

//     // Perform authentication and get the token
//     const response = await request(app)
//       .post('/login') // Assuming you have a login route
//       .send({ email: 'test@example.com', password: 'password' })
//       .set('Accept', 'application/json');

//     authToken = response.body.accessToken; // Store the authentication token
//   });

//   afterAll(async () => {
//     await cleanupDatabase();
//   });

//   it('should create a new photo with valid data for an authenticated user and return 200', async () => {
//     const response = await request(app)
//       .post('/photos')
//       .send(validPhotoData)
//       .set('Accept', 'application/json')
//       .set('Authorization', `Bearer ${authToken}`); // Include the authorization token

//     expect(response.statusCode).toBe(200);
//     expect(response.body.id).toBeTruthy();
//     expect(response.body.price).toBe(validPhotoData.price);
//     expect(response.body.title).toBe(validPhotoData.title);
//     expect(response.body.description).toBe(validPhotoData.description);
//   });

//   it('should return 401 if the user is not authenticated', async () => {
//     const response = await request(app)
//       .post('/photos')
//       .send(validPhotoData)
//       .set('Accept', 'application/json');

//     expect(response.statusCode).toBe(401);
//     expect(response.body.error).toBe('Unauthorized');
//   });
// });
