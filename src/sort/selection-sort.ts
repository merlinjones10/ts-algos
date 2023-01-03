/* eslint-disable @typescript-eslint/no-unused-vars */

function mySelSort(array: NumArr): NumArr {
  let sortedArr = array;

  for (let i = 0; i < array.length - 1; i++) {
    let lowestVal = { val: array[i], index: i };

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < lowestVal.val) {
        lowestVal = { val: array[j], index: j };
      }
    }
    sortedArr[lowestVal.index] = array[i];
    sortedArr[i] = lowestVal.val;
  }
  return sortedArr;
}

//example from book. Pg 69
function selectionSort(array: NumArr): NumArr {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}

export { mySelSort, selectionSort };
