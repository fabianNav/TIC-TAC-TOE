import './css/style.css'

let turnoJugadorUno = true;
let celdas = document.getElementsByClassName('celda');

for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('click', userMove);
}

function userMove(e) {
  let valorCelda = e.target.innerHTML;
  if (!valorCelda.length) {
    e.target.innerHTML = turnoJugadorUno ? 'X' : 'O';
    turnoJugadorUno = !turnoJugadorUno;

    chequearLineas(0, 1, 2);
    chequearLineas(3, 4, 5);
    chequearLineas(6, 7, 8);
    chequearLineas(0, 3, 6);
    chequearLineas(0, 4, 8);
    chequearLineas(6, 4, 2);
  }
}

function chequearLineas(c1, c2, c3) {
  if (celdas[c1].innerHTML.length && celdas[c1].innerHTML == celdas[c2].innerHTML && celdas[c2].innerHTML == celdas[c3].innerHTML) {
    mostrarGanador(celdas[c1].innerHTML);
  }
}

function mostrarGanador(jugador) {
  alert(jugador + ' Ganó', window.location.reload())
}

let recargarPagina = document.getElementById('recargar');
recargarPagina.addEventListener('click', () => {
  window.location.reload();
});




const colorDelSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');
const setTheme = (tema) => {
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('theme', tema);
}
slider.addEventListener('click', () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || colorDelSistema);