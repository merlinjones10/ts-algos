/*
                    mid
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
|                 |    |                           |
<-from 0 to mid-1->    <-- from mid+1 to the end --> 
note that in this example, the boundary values are included  
*/

function simpleSearch(intArray: number[], target: number): number | null {
  let myArray = intArray;
  let middleP: number;

  let lowerBounds = 0;
  let upperBounds = myArray.length - 1;

  while (lowerBounds <= upperBounds) {
    middleP = Math.floor((lowerBounds + upperBounds) / 2);
    if (myArray[middleP] === target) return middleP;

    if (myArray[middleP] < target) {
      lowerBounds = middleP + 1;
    }

    if (myArray[middleP] > target) {
      upperBounds = middleP - 1;
    }
  }

  return null;
}

export { simpleSearch };
