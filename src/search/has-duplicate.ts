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

export { nestedHasDuplicate, optimizedHasDuplicate };
