/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Approach 2
    // Use Set and return true if encountered duplicate
    let set = new Set()
    for(let num in nums) {
        if(set.has(nums[num])) {
            return true
        } else {
            set.add(nums[num])
        }
    }
    return false
    
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Approach 2 (99.04 Faster)
    // Use Set and return true if encountered duplicate
    let set = new Set(nums)
    if (set.size === nums.length) {
        return false
    }
    return true
    
};

// 1 line solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Approach 2
    // Use Set and return true if encountered duplicate
    // O(n) for both time and space complexity 
    return new Set(nums).size !== nums.length
};
