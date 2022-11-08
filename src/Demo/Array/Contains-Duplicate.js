/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 217 https://leetcode.com/problems/contains-duplicate/
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * 如果 array 中有重複值，就回傳 true，反之 false
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 */

const containsDuplicate = (nums) => {
  const newNums = new Set(nums)

  if (newNums.size !== nums.length) {
    return true
  }
  return false
}

export default containsDuplicate
