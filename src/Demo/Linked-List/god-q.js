/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/**
 * 文章出處: https://medium.com/starbugs/%E4%BE%86%E5%BE%81%E6%9C%8D%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95%E5%90%A7-%E9%97%9C%E6%96%BC-linked-list-%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9-feat-javascript-ff0ed89c326d
 * Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 */

const getLinkedListLength = (head) => {
  // 長度部分
  let listLen = 0
  while (head !== null) {
    head = head.next
    listLen += 1
  }

  const middle = Math.floor(listLen / 2)
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  // Math.floor() 函式會回傳小於等於所給數字的最大整數。

  // 值得部分
  let workHead = head
  let currentIndex = 0
  while (currentIndex < middle) {
    workHead = workHead.next
    currentIndex += 1
  }

  return workHead
}

getLinkedListLength([1, 2, 3, 4, 5])
