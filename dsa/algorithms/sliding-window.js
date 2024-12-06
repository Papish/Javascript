function slidingWindow(arr, k) {
  let maxSum = -Infinity;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const sum = slidingWindow([1, 4, 6, 2, 3, 9, 0, 2], 3);
console.log(sum); // 14
