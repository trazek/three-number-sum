/*
    Example

    array = [12, 3, 1, 2, -6, 5, -8, 6]
    sort = [-8, -6, 1, 2, 3, 5, 6, 12]

    current = -6 
    left = 1
    right = 5

    7 --> shift right

    targetSum = 0

    result = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

    [-8, -4, 1, 3, 5, 6, 12]
    [-8, -4, 1, 3, 4, 5, 6, 12]
    [-8, -4, 1, 3, 5, 5, 6, 11, 15]
*/

function sortNumberArray(a, b) {
  return a - b;
}

function threeNumberSum(array, targetSum) {
  // Write your code here.
  const result = [];
  array.sort(sortNumberArray);

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;

    for (let j = i + 1; j < array.length; j++) {
      let currentSum = current + array[leftIndex] + array[rightIndex];

      if (currentSum > targetSum) {
        rightIndex = rightIndex - 1;
      } else if (currentSum < targetSum) {
        leftIndex = leftIndex + 1;
      } else if (currentSum === targetSum) {
        if (leftIndex >= rightIndex) break;

        result.push(
          [current, array[leftIndex], array[rightIndex]].sort(sortNumberArray)
        );
        leftIndex = leftIndex + 1;
        rightIndex = rightIndex - 1;
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
