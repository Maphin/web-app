import express from 'express';
import config from './config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import userRouter from './routes/userRouter.js';
import subscriptionRouter from './routes/subscriptionRouter.js';
import orderRouter from './routes/orderRouter.js'
import visitRouter from './routes/visitRouter.js';

app.use('/api/', userRouter);
app.use('/api/', subscriptionRouter);
app.use('/api/', orderRouter);
app.use('/api/', visitRouter);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server has been started...');
});
