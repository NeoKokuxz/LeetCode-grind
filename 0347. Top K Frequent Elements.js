/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        if (!map.has(nums[index])) {
            // init
            map.set(nums[index], 0)
        }
        // Increase current number by 1
        map.set(nums[index], map.get(nums[index]) + 1)
    }
    // Compare map by it's value
    const sortedKeys = [...map].sort((a, b) => b[1] - a[1]).map(([key]) => key);
    return sortedKeys.slice(0, k)
};

// Input: nums = [1,1,1,2,2,3,3,3,4,4,4,4,4]

// map/dict : 
// 1 : 3 *
// 2 : 2
// 3 : 3 *
// 4 : 5 *

// K = 2

// turn map/dict into sorted array by their value 
// [3,2,3,5] => [[2,2],[1,3],[3,3],[4,5]]

// output => [3,3],[4,5]
