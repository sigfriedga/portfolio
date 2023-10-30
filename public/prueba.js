document.addEventListener('DOMContentLoaded', async function() {
  try {
    const response = await fetch('/datos-linkedin');
    const data = await response.json();
    console.log(data);
    // Manipular y mostrar los datos en tu HTML
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
});
