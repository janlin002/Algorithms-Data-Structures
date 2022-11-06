/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

// 這種寫法是正確的，但會導致 Time Limit Exceeded，猜測是因為使用了兩個 for-loop，所以 BigO 達到 n^2
const maxProfit = (prices) => {
  let ans = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > ans) {
        ans = prices[j] - prices[i]
      }
    }
  }
  return ans
}

// 這是 Leetcode 上面的解答
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/39223/your-runtime-beats-99-05-of-javascript-submissions/?languageTags=javascript

const maxProfit2 = (prices) => {
  const len = prices.length
  let curr = prices[0]
  let res = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > curr && (prices[i] - curr > res)) {
      res = prices[i] - curr
    }
    if (prices[i] < curr) {
      curr = prices[i]
    }
  }

  return res
}

export { maxProfit, maxProfit2 }
