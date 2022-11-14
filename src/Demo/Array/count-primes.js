/**
 * @param {number} n
 * @return {number}
 */

/**
 * 204 https://leetcode.com/problems/count-primes/description/
 *
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 * Input: n = 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 * 題目: 找出給定數字以下的所有質數
 */

// 這題其實可以用暴力解法

const countPrimes = (n) => {
  const arr = []
  const arr2 = []
  const arr3 = [2, 3, 5, 7]

  /**
   * 判斷質數
   * 如果除以 2, 3, 5, 7 都有餘數，就為質數
   * 下方程式碼沒寫完
   */
  //
  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      arr.push(i)
    }
  }

  // 把 2,3,5,7 加回去
  arr3.forEach((item) => {
    if (n > item) {
      arr2.push(item)
    }
  })

  return [...arr2, ...arr].length
}

countPrimes(11)

/**
 * https://pjchender.blogspot.com/2017/09/algorithm-sieve-of-eratosthenes.html
 * 因數: https://zh.wikipedia.org/zh-tw/%E5%9B%A0%E6%95%B8
 * Leetcode 上面看到有人使用 Sieve of Eratosthenes Algorithm
 * Sieve of Eratosthenes Algorithm:
 * 數字可以分成質數（Prime）和合數（Composite），而質數的定義是：「一個大於 1 的整數，除了 1 和數本身以外，沒有其他的因數」，質數之外的都屬於合數。
 *
 * 在判斷一個數字是否為質數前，只需判斷該數目 n 的 1 ~ √n 中有無因數即可
 * 因為 √n * √n = n
 * 且 n 會有多個因數，如果其中一個因數大於 √n ，另一個一定小於 √n，所以只需要針對小於的來比較看看有沒有辦法整除 n
 *
 * Math.sqrt(n) => 返回 n 的平方根
 * 以下實戰:
 */

function sieveOfEratosthenes(n) {
  // 建立一個陣列包含 number + 1 個元素，且元素值均為 true
  const isPrimeArr = new Array(n + 1).fill(true)

  // 因為我們知道 0 和 1 不是質數
  isPrimeArr[0] = false
  isPrimeArr[1] = false

  // 我們只需判斷到 √n 即可
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 如果 isPrimeArr[i] 是質數，把所有該倍數都標為非質數
    if (isPrimeArr[i] === true) {
      for (let j = 2; i * j <= n; j++) {
        console.log(`${i} 的倍數: ${i * j}`)
        isPrimeArr[i * j] = false
      }
    }
  }

  /**
     * 透過 arr.map 將 isPrimeArr 中為 true 的內容，代成 index 的值
     * 透過 arr.filter 將陣列中的 false 都過濾掉
    * */
  return isPrimeArr.map((item, index) => (item ? index : false)).filter((item) => item)
}

sieveOfEratosthenes(25)
