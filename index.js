function hasTargetSum(array, target) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return true;
    }
    else if (sum > target) {
      right--;
    }
    else {
      left++;
    }
  }

  return false;
}



if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
