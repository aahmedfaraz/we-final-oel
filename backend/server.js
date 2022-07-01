const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false}));
app.use(cors());

const PORT = process.env.PORT || 5000;

// Define Routes here
app.use('/cars', require('./routes/cars'));

app.listen(PORT, () => console.log(`The Server started on http://localhost:${PORT}`));