const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3030;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',require('./routes/auth'));
app.use('/api',require('./routes/shop-men'));
app.use('/api',require('./routes/shop-women'));
app.use('/api',require('./routes/product'));
app.use('/api',require('./routes/shop'));
app.use('/api',require('./routes/cart'))
app.use('/api',require('./routes/allshop'))
app.use('/api',require('./routes/addcart'))
app.use('/api',require('./routes/order'))
app.use('/api',require('./routes/checkout'))
app.use('/api',require('./routes/delete'))
app.listen(port,() => console.log('Success'));

