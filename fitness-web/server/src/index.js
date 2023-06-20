//Framework TO CREATE API
import express from 'express';
//Set Up Roles Between Client Server
import cors from 'cors';
//Manage DB
import mongoose  from 'mongoose';
import { config } from 'dotenv';
import {usersRouter} from './routes/users.js';
import {trainingsRouter} from './routes/trainings.js';
import {muscleRouter} from './routes/muscleInformation.js';

config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', usersRouter);
app.use('/trainings', trainingsRouter);
app.use('/muscle', muscleRouter);

const uri = process.env.URL_DB;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(3002, () => console.log('Server Running on Port 3002')); //Start Server
