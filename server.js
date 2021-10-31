const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then((response) => {
    console.log(`DB Connection Successfully! ${response.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log(`Backend server is running! http://localhost:${PORT}`);
});
