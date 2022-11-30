import express from 'express';
const app = express();

import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js';
import notFoundMiddleware from './middleware/notfound.js';
import errorsMiddleware from './middleware/errors.js';


notFoundMiddleware

app.get('/', (req, res) => {
    res.send('yeyeyeye')
})

app.use(notFoundMiddleware)
app.use(errorsMiddleware)
const port = process.env.PORT || 3001



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

