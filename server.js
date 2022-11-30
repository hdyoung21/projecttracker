import express from 'express';
const app = express();
app.use(express.json);

import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js';
import notFoundMiddleware from './middleware/notfound.js';
import errorsMiddleware from './middleware/errors.js';
import authRouter from './routes/authRoutes.js';
import projectRouter from './routes/projectRoutes.js';


notFoundMiddleware

app.get('/', (req, res) => {
    res.send('yeyeyeye')
})

app.use(notFoundMiddleware)
app.use(errorsMiddleware)
const port = process.env.PORT || 3001

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/projects', projectRouter)



app.listen(port, () => {
    console.log(`server is listening on ${port}!!!`);
})

const startup = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is on port ${port}!`)
        })
    } catch (error) {
        console.log(error)
    }
}
startup()

