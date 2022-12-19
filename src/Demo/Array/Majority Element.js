/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 169 https://leetcode.com/problems/majority-element/description/
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

const num = [3, 2, 3]

const majorityElement = (nums) => {
  nums.sort()
  const i = Math.floor(nums.length / 2)
  return nums[i]
}

majorityElement(num)

/**
 * 這題看到很多人有用暴力解法，不過上面這個解法真的是很牛逼
 * 透過題目所說 majority element 至少會超過一半的長度，排序過後直接給予位置
 */
