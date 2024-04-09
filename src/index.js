const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  const startTime = Date.now();
  res.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${
        req.originalUrl
      } - ${responseTime}ms`,
    );
  });
  next();
});

const userController = require('./user/user.controller');
app.use('/api/users', userController);

const homeworkController = require('./homework/homework.controller');
app.use('/api/homeworks', homeworkController);

const runningPort = process.env.RUNNING_PORT;
app.listen(runningPort, () => {
  console.log('listening for requests on port ' + runningPort);
});
