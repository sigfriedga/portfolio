document.addEventListener('DOMContentLoaded', async function() {
  try {
    const response = await fetch('/datos-linkedin');
    const data = await response.json();
    console.log(data);

    const name = data.given_name;

    console.log(name);

    document.getElementById('name').textContent = name;


    
    
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
});

// getPersonalInfo () {
//     this.name = this.data.given_name;
//     this.surname = this.data.family_name;
// }