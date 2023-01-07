const recursiveFunction = (arr, x, start, end) => {
  // Base Condition => 沒排序
  if (start > end) return false

  // Find the middle index
  // Math.floor() 跟 Math.ceil() 都可以，不過寫法上面會有些微的不同
  const mid = Math.floor((start + end) / 2)

  // Compare mid with given key x => 剛好等於
  if (arr[mid] === x) return true

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1)
  return recursiveFunction(arr, x, mid + 1, end)
}

// Iterative function to implement Binary Search
const iterativeFunction = (arr, x) => {
  let start = 0
  let end = arr.length - 1

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    const mid = Math.floor((start + end) / 2)

    // If element is present at mid, return True
    if (arr[mid] === x) return true

    // Else look in left or right half accordingly
    if (arr[mid] < x) start = mid + 1
    else end = mid - 1
  }

  return false
}

const arr = [1, 3, 5, 7, 8, 9]
const x = 5

recursiveFunction(arr, x, 1, 9)
iterativeFunction(arr, x)
