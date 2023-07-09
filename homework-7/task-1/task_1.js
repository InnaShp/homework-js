const button = document.getElementById('open-window-btn');

button.addEventListener('click', function openWindow() {
  const newWindow = window.open('', '', 'width=300, height=300');
  setTimeout(() => {
    newWindow.resizeTo(500, 500);
  }, 2000);
  setTimeout(() => {
    newWindow.moveTo(200, 200);
  }, 4000);
  setTimeout(() => {
    newWindow.close();
  }, 6000);
});