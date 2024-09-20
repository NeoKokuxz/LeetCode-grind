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
