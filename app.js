import express from "express"
import morgan from "morgan" 
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use(morgan('combined'))

export default app