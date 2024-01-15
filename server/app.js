const mysql = require('mysql');
require('dotenv').config();
const express = require('express');

const app = express();

const pool = mysql.createPool({
  connectionLimit: 10, // Nombre maximum de connexions
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database!');

  // Utiliser la connexion et la relâcher ensuite
  connection.release();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = pool;



// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database!');
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Serveur démarré sur le port ${PORT}`);
// });