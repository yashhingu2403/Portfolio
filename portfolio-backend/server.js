const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = pool;
