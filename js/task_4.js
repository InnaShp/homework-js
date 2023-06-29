const buttonTask4 = document.querySelector('#task_4-results');
buttonTask4.addEventListener('click', showResultsTask4);
function showResultsTask4() {
  //point 1
  function sumSliceArray(arr, first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
      throw new Error('The provided values are not integers.');
    }
    if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
      throw new Error("One or both of the indices exceed the array length.");
    }
    return arr[first] + arr[second];
  }
  const ordinaryNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const first = 3;
  const second = 5;
  try {
    console.log(sumSliceArray(ordinaryNumbersArray, first, second));
  } catch (error) {
    console.error(error.message);
  }

}