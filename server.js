const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

//Call Linkedin API

const clientId = 'TU_CLIENT_ID'; // Reemplaza con tu Client ID
const clientSecret = 'TU_CLIENT_SECRET'; // Reemplaza con tu Client Secret
const accessToken = 'TOKEN'; // Reemplaza con tu Access Token (obtenido después de la autenticación)

// URL de la API de LinkedIn que deseas consultar (por ejemplo, para obtener tu perfil)
//const apiUrl = 'https://api.linkedin.com/v2/me';
const apiUrl = 'https://api.linkedin.com/v2/userinfo';

// Encabezados de autenticación
const headers = {
  'Authorization': `Bearer ${accessToken}`
};

// Hacer una solicitud GET a la API de LinkedIn
fetch(apiUrl, {
  method: 'GET',
  headers: headers
})
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    // Manipular los datos recibidos
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });