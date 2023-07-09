const nameList = document.getElementById('nameList');
const deleteButton = document.getElementById('delete-btn');

deleteButton.addEventListener('click', () => {
  const selectedNameIndex = nameList.selectedIndex;
  nameList.remove(selectedNameIndex);
});