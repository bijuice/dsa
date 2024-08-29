function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const { leftHalf, rightHalf } = split(arr)

  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)

  return merge(left, right)
}

function split(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const midPoint = Math.floor(arr.length / 2)

  //   const leftHalf = arr.slice(0, midPoint)
  //   const rightHalf = arr.slice(midPoint)

  const leftHalf = iterativeSplit(arr, 0, midPoint)
  const rightHalf = iterativeSplit(arr, midPoint, arr.length)

  console.log("left", leftHalf)
  console.log("right", rightHalf)

  return { leftHalf, rightHalf }
}

function iterativeSplit(arr, start, end) {
  const result = []

  for (let i = start; i < end; i++) {
    result.push(arr[i])
  }
  return result
}

function merge(left, right) {
  let result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    result.push(left[i])
    i++
  }

  while (j < right.length) {
    result.push(right[j])
    j++
  }

  return result
}

console.log(mergeSort([5, 4, 8, 2, 10, 5, 9, 2, 1]))
