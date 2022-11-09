/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 35. https://leetcode.com/problems/search-insert-position/description/
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 */

// 這是Leetcode上的解答，使用了 Binary-search
const searchInsert = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  let middle

  while (left <= right) {
    middle = parseInt(left + (right - left) / 2, 10)
    if (target === nums[middle]) {
      return middle
    } if (target > nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return (target < nums[middle] ? middle : (middle + 1))
}

export default searchInsert
