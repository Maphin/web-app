import express from 'express';
import config from './config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import userRouter from './routes/userRouter.js';
import subscriptionRouter from './routes/subscriptionRouter.js';
import orderRouter from './routes/orderRouter.js'

app.use('/api/', userRouter);
app.use('/api/', subscriptionRouter);
app.use('/api/', orderRouter);

app.listen(config.API_SERVER_PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server has been started...');
});
