document.addEventListener('DOMContentLoaded', async function() {
  try {
    const response = await fetch('/datos-linkedin'); // Hacer una solicitud al servidor
    const data = await response.json(); // Convertir la respuesta a JSON

    // Manipular los datos recibidos
    const name = data.firstName.localized['en_US']; // Suponiendo que "firstName" es un campo en los datos de LinkedIn

    // Actualizar el contenido en el HTML
    document.getElementById('name').textContent = name; // Cambiar el contenido de un elemento en tu HTML
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
});
