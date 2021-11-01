const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

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

// parse request to body-psrser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(PORT, () => {
  console.log(`Backend server is running! http://localhost:${PORT}`);
});
