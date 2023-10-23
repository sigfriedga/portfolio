document.getElementById('show-more').addEventListener('click', function() {
  var texto = document.getElementById('tabout-text');
  texto.style.maxHeight = 'none'; // Elimina la altura máxima
  this.style.display = 'none'; // Oculta el enlace "Mostrar más"
});