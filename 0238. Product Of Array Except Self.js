/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Pre table
    let preTable = []
    let preMax = 1
    for (let i = 0; i < nums.length; i++) {
        preMax *= nums[i]
        preTable.push(preMax)
    }
    // Post Table
    let postTable = []
    let postMax = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        postMax *= nums[i]
        postTable.push(postMax)
    }
    postTable = postTable.reverse()

    // Compute the output
    let output = []
    for(let i = 0; i < nums.length; i++) {
        let pre = preTable[i - 1]
        let post = postTable[i + 1]
        if(isNaN(pre)) {
            pre = 1
        }
        if(isNaN(post)) {
            post = 1
        }
        output.push(pre * post)
    }
    return output
};

// 1 2 3 4
// Pre table
// 1 -> 2 -> 3 -> 4 = 1 2 6 24

// Post table
// 1 <- 2 <- 3 <- 4 = 24 24 12 4 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Pre table
    let preTable = []
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        preTable.push(product)
        product *= nums[i]
    }
    // Post Table = Product
    let output = new Array(nums.length).fill(1)
    product = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] = product * preTable[j]
        product *= nums[j]
    }

    return output
};

