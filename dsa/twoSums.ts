function twoSums(nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const c = target - nums[i];
    if (m.has(c)) {
      return [m.get(c), i];
    }
    m.set(nums[i], i);
  }
  return [];
}

console.log(twoSums([3, 2, 4], 5));
