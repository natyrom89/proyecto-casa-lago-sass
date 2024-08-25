document.addEventListener('DOMContentLoaded', function() {
  const abrir = document.getElementById('abrir');
  const cerrar = document.getElementById('cerrar');
  const nav = document.getElementById('nav');

  abrir.addEventListener('click', function() {
      nav.classList.add('nav-visible');
  });

  cerrar.addEventListener('click', function() {
      nav.classList.remove('nav-visible');
  });
});
