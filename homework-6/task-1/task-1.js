function showNumbers() {
  const list = document.getElementById('list');
  const firstElement = list.firstElementChild.textContent;
  const lastElement = list.lastElementChild.textContent;
  const secondElement = list.children[1].textContent;
  const fourthElement = list.children[3].textContent;
  const thirdElement = list.children[2].textContent;
  alert(`${firstElement}, ${lastElement}, ${secondElement}, ${fourthElement}, ${thirdElement}`);
}
showNumbers();