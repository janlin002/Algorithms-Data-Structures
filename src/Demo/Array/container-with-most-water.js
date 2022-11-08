/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * ![image](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)
 *
 * 思路：找出頭尾最高的跟第二高的，這樣相乘值也會是最大的
 */

// 這種寫法是正確的，但會導致 Time Limit Exceeded，猜測是因為使用了兩個 for-loop，所以 BigO 達到 n^2
const maxArea = (height) => {
  let ans = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      const totalHight = height[i] > height[j]
        ? height[j]
        : height[i]

      if (totalHight * (j - i) > ans) {
        ans = totalHight * (j - i)
      }
    }
  }
  return ans
}

// leetcode 裡面的解答
const maxArea2 = (height) => {
  let i = 0
  let j = height.length - 1
  let maxArea = 0
  while (i !== j) {
    let area
    if (height[i] <= height[j]) {
      area = height[i] * (j - i)
      i++
    } else if (height[j] < height[i]) {
      area = height[j] * (j - i)
      j--
    }
    if (area > maxArea) {
      maxArea = area
    }
  }
  return maxArea
}

export { maxArea, maxArea2 }
