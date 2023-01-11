// Chapter 6, pg. 79 for explanation
// Python example on pg. 84.
// Moving values to the left until it is in the correct place

function myInsertionSort(arr: NumArr): NumArr {
  let tempVal: number;
  let arrCopy = arr;
  let comparePosition: number;

  //   loop through the arr starting with index 1 (second item)
  for (let i = 1; i < arrCopy.length; i++) {
    // [1, 5, 3, 2]
    //   store that value in a temp variable, i.e remove it from the array.
    //   imagine that that index is now empty.
    tempVal = arrCopy[i];
    comparePosition = i - 1;

    // while less than 0
    while (comparePosition >= 0) {
      //   compare the value to the left with the temp value
      //   if it is HIGHER than the temp variable...
      if (arr[comparePosition] > tempVal) {
        //   move it one place to the right. i.e into the EMPTY space.
        arrCopy[comparePosition + 1] = arrCopy[comparePosition];
        //   continue moving one spot to the left until you reach the beginning. comparing each against the temp value
        comparePosition -= 1;
      } else break;
      arrCopy[comparePosition + 1] = tempVal;
    }
  }
  return arrCopy;
}

// generic example
// https://gist.github.com/JJWesterkamp/be2d9c4048dc4e250fb3a56624c33b31
function insertionSort<T>(list: T[]): T[] {
  IndexIterator: for (let i = 1; i < list.length; i++) {
    const valueToSort = list[i];

    InsertionIterator: for (let j = i - 1; j >= 0; j--) {
      if (valueToSort >= list[j]) {
        list[j + 1] = valueToSort;
        continue IndexIterator;
      } else {
        list[j + 1] = list[j];
        list[j] = valueToSort;
        continue InsertionIterator;
      }
    }
  }

  return list;
}

export { myInsertionSort, insertionSort };
