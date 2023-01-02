// Check whether an array has any duplicates
// Chapter 4. Page 59.

interface ReturnValue {
  steps: number; // only used to check efficiency
  result: boolean;
}

function nestedHasDuplicate(array: number[]): ReturnValue {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      steps++;
      if (i !== j && array[i] === array[j]) {
        return { result: true, steps };
      }
    }
  }
  return { result: false, steps };
}

function optimizedHasDuplicate(array: number[]): ReturnValue {
  let steps = 0;
  let existingNumbers = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === array[i]) {
      return { result: true, steps };
    } else {
      existingNumbers[array[i]] = 1;
    }
  }

  return { result: false, steps };
}

// exercise - greatest number - pg 61

// rewrite the func so that it becomes O(N)

function logGreatestNumber(array: number[]): number | undefined {
  let isIValTheGreatest: boolean;

  for (let i = 0; i < array.length; i++) {
    isIValTheGreatest = true;
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        isIValTheGreatest = false;
      }
    }
    if (isIValTheGreatest) {
      return array[i];
    }
  }
}

// My optimized version
function linGreatestNumber(array: number[]): number | undefined {
  let newlyPopulatedArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    newlyPopulatedArray[array[i]] = 1;
  }
  return newlyPopulatedArray.length - 1;
}

// optimized version from book, much simpler
function exampleLinGreatestNumber(array: number[]): number {
  let greatestNumberSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > greatestNumberSoFar) {
      greatestNumberSoFar = array[i];
    }
  }
  return greatestNumberSoFar;
}

export {
  nestedHasDuplicate,
  optimizedHasDuplicate,
  logGreatestNumber,
  linGreatestNumber,
  exampleLinGreatestNumber,
};
