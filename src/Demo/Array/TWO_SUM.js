/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 題目:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * 陷阱: [2,5,5,11]
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

const twoSum2 = (nums, target) => {
  for (i = 0; nums.length > i; i++) {
    const ans = nums.indexOf(target - nums[i])
    if (ans !== -1 && ans !== i) {
      return [ans, i]
    }
  }
}

export { twoSum, twoSum2 }
