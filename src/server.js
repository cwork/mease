const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dbConnect = require('./config/db');

// Load environmental variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

dbConnect();

const app = express();
const port = process.env.PORT || 5000;

// Pass middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

const server = app.listen(
  port,
  console.log(`Server listening on port ${port}...`)
);

process.on('uncaughtException', (error) => {
  console.log(`Error: ${error.message}`);
});
