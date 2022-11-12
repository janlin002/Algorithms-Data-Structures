/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 189 https://leetcode.com/problems/rotate-array/description/
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 * 思路1: 透過 (i + k) % i.length 取餘數的方式取得各個位置
 * 思路2: 因為 k 代表要反轉的次數，代表後方會有 k 個數字會移到前面，所以只需要對後方的 k 個數字做修改即可
 */

// 1 => 這是我原本的寫法，但沒辦法正確執行

const rotate = (nums, k) => {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i]
  }

  return arr
}

// 2 => 這是 Leetcode 大家普遍的寫法，不過會導致 Time Limit Exceeded

const rotate2 = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}

// 3 => 這是改寫 2 的寫法，Leetcode 給過

const rotate3 = (nums, k) => nums.unshift(...nums.splice(-k % nums.length))

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

rotate(nums, k)
rotate2(nums, k)
rotate3(nums, k)
