const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  const dataAnim = circle.getAttribute('data-anim');
  if (dataAnim) {
    circle.classList.add(dataAnim);
  }
});