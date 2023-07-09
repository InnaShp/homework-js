const colorChangers = document.getElementById('page-color-changers');
const backgroundColors = {
  blue: 'blue',
  pink: 'pink',
  brown: 'brown',
  yellow: 'yellow',
  none: ''
};

colorChangers.children[0].addEventListener('click', () => {
colorChangers.style.backgroundColor = backgroundColors.blue;
});

colorChangers.children[1].addEventListener('dblclick', () => {
colorChangers.style.backgroundColor = backgroundColors.pink;
});

colorChangers.children[2].addEventListener('mousedown', () => {
colorChangers.style.backgroundColor = backgroundColors.brown;
});
colorChangers.children[2].addEventListener('mouseup', () => {
colorChangers.style.backgroundColor = backgroundColors.none;
});

colorChangers.children[3].addEventListener('mouseover', () => {
colorChangers.style.backgroundColor = backgroundColors.yellow;
});
colorChangers.children[3].addEventListener('mouseleave', () => {
colorChangers.style.backgroundColor = backgroundColors.none;
});
