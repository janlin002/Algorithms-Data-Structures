/* eslint-disable max-len */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/**
 * 191. Number of 1 Bits https://leetcode.com/problems/number-of-1-bits/description/
 *
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 *
 * Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 */

// 這邊有想到這種解法，不過 toString(10)，跟預期的不太一樣，下面會補充toString的進位法
// 沒看清楚題目是說二進位
const n = 00000000000000000000000000001011

const hammingWeight = function (n) {
  return n.toString(2).split('0').join('').length
}

hammingWeight(n)
