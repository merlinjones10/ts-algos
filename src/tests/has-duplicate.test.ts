import {
  nestedHasDuplicate,
  optimizedHasDuplicate,
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
});
