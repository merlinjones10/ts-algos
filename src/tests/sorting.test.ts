import { mySelSort, selectionSort } from '../sort/selection-sort';
import { insertionSort, myInsertionSort } from '../sort/insertion-sort';

describe('sorting algos', () => {
  test('should return sorted arr of numbers', () => {
    let arr: NumArr;
    let sorted: NumArr;
    arr = [4, 3, 2, 1];
    sorted = [1, 2, 3, 4];
    // expect(mySelSort(arr)).toEqual(sorted);
    // expect(selectionSort(arr)).toEqual(sorted);
    expect(myInsertionSort(arr)).toEqual(sorted);
    // expect(insertionSort(arr)).toEqual(sorted);

    arr = [6, 7, 2, 3];
    sorted = [2, 3, 6, 7];
    // expect(mySelSort(arr)).toEqual(sorted);
    // expect(selectionSort(arr)).toEqual(sorted);
    expect(myInsertionSort(arr)).toEqual(sorted);
    // expect(insertionSort(arr)).toEqual(sorted);

    arr = [100, 33, 33, 22, 11, 266];
    sorted = [11, 22, 33, 33, 100, 266];
    // expect(mySelSort(arr)).toEqual(sorted);
    // expect(selectionSort(arr)).toEqual(sorted);
    expect(myInsertionSort(arr)).toEqual(sorted);
    // expect(insertionSort(arr)).toEqual(sorted);
  });
});
