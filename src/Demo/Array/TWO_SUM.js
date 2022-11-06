/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * [2,5,5,11]
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = (nums, target) => {
  for (i = 0; nums.length > i; i++) {
    const ans = nums.indexOf(target - nums[i])
    if (ans !== -1 && ans !== i) {
      return [ans, i]
    }
  }
}

export { twoSum, twoSum2 }
