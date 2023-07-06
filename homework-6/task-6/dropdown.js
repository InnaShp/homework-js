const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const sizeItems = document.querySelectorAll('.dropdown-menu li');

dropdownToggle.addEventListener('click', toggleDropdown);
sizeItems.forEach(item => {
  item.addEventListener('click', selectSize);
});

function toggleDropdown() {
  dropdownMenu.classList.toggle('show');
}

function selectSize(event) {
  const selectedSize = event.target.textContent;
  dropdownToggle.textContent = selectedSize;
  dropdownMenu.classList.remove('show');
}

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-toggle')) {
    dropdownMenu.classList.remove('show');
  }
});