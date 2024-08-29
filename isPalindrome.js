/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^A-Z0-9]/gi, "")

  let left = 0
  let right = s.length - 1

  while (left != right) {
    if (s[left++] !== s[right--]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome("race a car"))
