require('dotenv').config();
const express = require('express');
const dbConnection = require('./config/config');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
dbConnection();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});