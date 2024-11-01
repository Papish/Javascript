function problem(nums, k) {
  let max = 0;
  let left = 0;
  let windowFliped = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      windowFliped++;
    }

    if (windowFliped > k) {
      while (nums[left] === 1) {
        left++;
      }
      left++;
      windowFliped--;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

const a = problem([1, 1, 1, 1, 1], 1);
console.log(a, 8);
