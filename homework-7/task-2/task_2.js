const button = document.getElementById('change-style-btn');
const text = document.getElementById('text');

button.addEventListener('click', changeCSS);
function changeCSS() {
  text.style = 'color: orange; font-size: 20px; font-family: "Comic Sans MS"';
}