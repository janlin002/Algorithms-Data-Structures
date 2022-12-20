/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 20 https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Input: s = "()"
 * Output: true
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Input: s = "(]"
 * Output: false
 */

// 這題可以透過暴力解法解決，不過太過繁瑣
// 下方的解法可以解決大部分的問題，不過遇到特殊型會報錯，例如: {()}

const string = '()'

const isValid = (s) => {
  const test = s.split('')

  for (let i = 0; i < test.length; i++) {
    // (){}[]
    if (i === 0 || i % 2 === 0) {
      if (test[i] === '(' && test[i + 1] === ')') {
        return true
      } if (test[i] === '{' && test[i + 1] === '}') {
        return true
      } if (test[i] === '[' && test[i + 1] === ']') {
        return true
      }
      return false
    }
  }
}

isValid(string)

// Leetcode 上的答案
const isValidLeetcode = (s) => {
  const myStack = []
  for (let i = 0; i < s.length; i++) {
    const current = s[i]

    if (current === '{' || current === '[' || current === '(') {
      myStack.push(current)
    } else if (current === '}') {
      if (myStack.pop() !== '{') {
        return false
      }
    } else if (current === ']') {
      if (myStack.pop() !== '[') {
        return false
      }
    } else if (current === ')') {
      if (myStack.pop() !== '(') {
        return false
      }
    }
  }
  return myStack.length === 0 // [""] true
}

isValidLeetcode(string)
