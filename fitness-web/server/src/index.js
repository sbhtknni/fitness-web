//Framework TO CREATE API
import express from 'express';
//Set Up Roles Between Client Server
import cors from 'cors';
//Manage DB
import mongoose  from 'mongoose';

import {usersRouter} from './routes/users.js';


const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', usersRouter);

mongoose.connect( "mongodb+srv://romharel:JOu6QaJuEstS0Bka@fitness-web.u0isjzc.mongodb.net/fitness-web?retryWrites=true&w=majority");
app.listen(3001, () => console.log('Server Running on Port 3001')); //Start Server
