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
const port = process.env.PORT || 5000; // Use environment variable or fallback to port 5000
app.use(express.json());
app.use(cors());
app.use('/auth', usersRouter);
app.use('/trainings', trainingsRouter);
app.use('/muscle', muscleRouter);

const url = process.env.URL_DB;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log('Connected to MongoDB');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  //show the console log of the server as html format

  //show the console log of the server as json format
  app.get('/', (req, res) => {
    res.send({ message: 'Server is ready' });
  }
  );
  //for every other request that is not defined, we will get this message
  app.use((req, res, next) => {
    res.status(404).send({ message: `Not Found ${req.originalUrl}` });
  }
  );
  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  }
  );
  
