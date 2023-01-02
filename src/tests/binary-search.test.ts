import { simpleSearch } from '../binary-search';

describe('binary search algos', () => {
  // simple search
  test('should return index of target', () => {
    let nums = [1, 3, 5, 6];
    let target = 5;
    let output: number | null = 2;
    expect(simpleSearch(nums, target)).toEqual(output);

    nums = [1, 3, 5, 6];
    target = 3;
    output = 1;
    expect(simpleSearch(nums, target)).toEqual(output);

    nums = [1, 3, 5, 6];
    target = 6;
    output = 3;
    expect(simpleSearch(nums, target)).toEqual(output);

    nums = [1, 3, 5, 6];
    target = 4;
    output = null;
    expect(simpleSearch(nums, target)).toEqual(output);
  });
});
