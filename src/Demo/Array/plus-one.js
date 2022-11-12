/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable max-len */
/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**
 * 66 https://leetcode.com/problems/plus-one/description/
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 */

const plusOne = (digits) => {
  // 轉成number
  const numString = parseInt(digits.join('').toString())

  // plus one
  const numStringPlus = numString + 1

  // to Array
  const ans = Array.from(String(numStringPlus), Number)

  return ans
}

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]

plusOne(digits)

// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

/**
 * 這樣的寫法在數字比較小的時候是可行的，不過因為 parseInt 有數字大小限制，超過 1999999999 就會無法轉換(包含 new Number(), Number()都是)，所以需要改其他寫法
 *
 * https://blog.csdn.net/qq_26464451/article/details/79697044
 * https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

/**
 * 下方為Leetcode裡面的解法
 *
 * 解題重點: 透過從後面開始算，解決如果尾數為9的情況
*/
const plusOne2 = (digits2) => {
  for (let i = digits2.length - 1; i >= 0; i--) {
    digits2[i]++
    if (digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}

plusOne2(digits)
