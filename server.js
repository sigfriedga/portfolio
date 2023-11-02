const express = require('express');
const fetch = require('node-fetch').default;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Request to Linkedin
app.get('/linkedinData', async (req, res) => {
  try {
    const response = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer {}`
      }
    });

    const linkedinData = await response.json();
    res.json(linkedinData);
  } catch (error) {
    console.error('Error al obtener datos de LinkedIn:', error);
    res.status(500).send('Error al obtener datos de LinkedIn');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});