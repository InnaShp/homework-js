const windowSize = document.getElementById('window-size');
windowSize.innerHTML = `Heigth: ${window.innerHeight}, width: ${window.innerWidth}`;

addEventListener('resize', () => {
  const heigth = window.innerHeight;
  const width = window.innerWidth;
  windowSize.innerHTML = `Heigth: ${heigth}, width: ${width}`;
});