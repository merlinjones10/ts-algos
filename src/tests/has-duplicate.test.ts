import {
  nestedHasDuplicate,
  optimizedHasDuplicate,
  logGreatestNumber,
  linGreatestNumber,
  exampleLinGreatestNumber,
} from '../search/has-duplicate';

describe('should test duplicate search functions', () => {
  const truthyArr = [1, 5, 3, 2, 1, 9, 6];
  const falsyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test('should test each function', () => {
    expect(nestedHasDuplicate(truthyArr).result).toBeTruthy();
    expect(optimizedHasDuplicate(truthyArr).result).toBeTruthy();
    expect(nestedHasDuplicate(falsyArr).result).toBeFalsy();
    expect(optimizedHasDuplicate(falsyArr).result).toBeFalsy();
  });

  test('should check steps are less in optimized solution', () => {
    const optimized = optimizedHasDuplicate(falsyArr);

    const nested = nestedHasDuplicate(falsyArr);

    expect(optimized.steps).toBeLessThan(nested.steps);
  });

  test('should return the greatest number', () => {
    let testArr: number[];
    testArr = [6, 5, 9, 3, 2];
    expect(logGreatestNumber(testArr)).toEqual(9);
    expect(linGreatestNumber(testArr)).toEqual(9);
    expect(exampleLinGreatestNumber(testArr)).toEqual(9);
    testArr = [0, 5, 9, 3, 45];
    expect(logGreatestNumber(testArr)).toEqual(45);
    expect(linGreatestNumber(testArr)).toEqual(45);
    expect(exampleLinGreatestNumber(testArr)).toEqual(45);
  });
});
