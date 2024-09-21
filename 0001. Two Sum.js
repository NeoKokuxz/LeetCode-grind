/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let currentDiff = target - nums[i]
        for(let j = i + 1; j < nums.length; j++) {
            if(currentDiff === nums[j]) {
                return [i, j]
            }
        }
    }
    return [0, 1]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        let diff = target - nums[index]; // Calculate the difference
        if (map.has(diff)) {
            // If the difference exists as a key in the map
            return [map.get(diff), index]; // Return the indices
        }
        map.set(nums[index], index); // Otherwise, store the number with its index
    }
};
