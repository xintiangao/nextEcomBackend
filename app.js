import express from "express"
import morgan from "morgan" 
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import photosRouter from "./src/controllers/photos.controllers.js"
import auth from "./src/middlewares/auth.js"
import cors from 'cors'

const app = express();
app.use(morgan('combined'))
app.use(express.json());
app.use(cors());

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/photos', auth, photosRouter)
app.use('/checkout', auth, checkoutRouter)

app.get('/protected', auth, (req, res) => {
    res.json({ "hello": "world" })
})

export default app