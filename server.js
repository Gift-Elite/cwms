const express = require('express');
const cors = require('cors');

const carRoutes = require('./routes/carRoutes');
const packageRoutes = require('./routes/packageRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/cars', carRoutes);
app.use('/packages', packageRoutes);
app.use('/services', serviceRoutes);
app.use('/payments', paymentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));