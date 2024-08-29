/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0
  let j = 0
  const result = []

  while (i < m && j < n) {
    console.log(i, nums1[i], j, nums2[j])
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i])
      i++
    } else {
      result.push(nums2[j])
      j++
    }
  }

  while (i < m) {
    result.push(nums1[1])
    i++
  }
  while (j < n) {
    result.push(nums2[j])
    j++
  }

  nums1 = result

  console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
