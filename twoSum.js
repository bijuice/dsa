/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const differenceObject = {}

  for (let i = 0; i < nums.length; i++) {
    /* 
        We need to find the difference between the target and current index
        so we know which number we are looking for
    */
    const difference = target - nums[i]

    /*
        We store the difference in the object so we can check 
        if its pair is present
    */

    differenceObject[nums[i]] = i
    console.log(differenceObject)

    const targetExists = differenceObject[difference]
    console.log(targetExists)

    if (targetExists !== undefined) {
      return [targetExists, i]
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
