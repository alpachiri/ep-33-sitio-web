// Menú accesible para pantallas pequeñas.
const botonMenu = document.querySelector('.menu-toggle');
const navegacion = document.querySelector('#navegacion-principal');

if (botonMenu && navegacion) {
  botonMenu.addEventListener('click', () => {
    const abierto = botonMenu.getAttribute('aria-expanded') === 'true';
    botonMenu.setAttribute('aria-expanded', String(!abierto));
    botonMenu.setAttribute('aria-label', abierto ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
    navegacion.classList.toggle('menu-abierto', !abierto);
  });

  navegacion.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) cerrarMenu();
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') cerrarMenu();
  });

  function cerrarMenu() {
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú de navegación');
    navegacion.classList.remove('menu-abierto');
  }
}
