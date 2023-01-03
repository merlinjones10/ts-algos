import { mySelSort, selectionSort } from '../sort/selection-sort';

describe('selection sort algos', () => {
  test('should sort an array of numbers', () => {
    let arr: NumArr;
    let sorted: NumArr;
    arr = [4, 3, 2, 1];
    sorted = [1, 2, 3, 4];
    expect(mySelSort(arr)).toEqual(sorted);
    expect(selectionSort(arr)).toEqual(sorted);

    arr = [6, 7, 2, 3];
    sorted = [2, 3, 6, 7];
    expect(mySelSort(arr)).toEqual(sorted);
    expect(selectionSort(arr)).toEqual(sorted);
  });
});
