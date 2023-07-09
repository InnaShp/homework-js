const button = document.getElementById('live-btn');
const events = ['click', 'mouseover', 'mouseleave'];
const texts = ['I was pressed!', 'Mouse on me!', 'Mouse is not on me!'];

function handleEvent(eventIndex) {
  const text = document.createElement('div');
  document.body.appendChild(text);
  text.textContent = texts[eventIndex];
}

events.forEach((event, index) => {
  button.addEventListener(event, () => {
    handleEvent(index);
  });
});
