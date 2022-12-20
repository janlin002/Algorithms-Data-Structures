/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * 242 https://leetcode.com/problems/valid-anagram/description/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 */

const isAnagram = (s, t) => {
  const test = s.split('').sort().join('')
  const test2 = t.split('').sort().join('')

  if (test === test2) {
    return true
  }
  return false
}

const s = 'anagram'
const t = 'nagaram'
isAnagram(s, t)

// Leetcode 上面的答案連變數都懶得加

const isAnagramLeetcode = (s, t) => s.split('').sort().join('') === t.split('').sort().join('')

isAnagramLeetcode(s, t)
