import express from "express"
// import prisma from "./src/utils/prisma.js"
// import bcrypt from "bcryptjs";
// import cors from 'cors'
// import { signAccessToken } from "./src/utils/jwt.js"
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"

const app = express();
app.use(express.json());

// app.use(cors());
app.use('/users', userRouter)
app.use('/auth', authRouter)

export default app