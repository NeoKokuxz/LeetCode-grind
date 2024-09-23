class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ''
        for(let string of strs) {
            encodedString += string.length + '#' + string 
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [] //output
        let index = 0; // Start pointer position
        while ( index < str.length) {
            // Check first # position   
            let position = str.indexOf('#', index)
            // Check word count before # 
            let wordCount = Number(str.slice(index, position))
            // Move index to # position + 1
            index = position + 1 
            // Put the index and wordCount into decoded array
            decoded.push(str.slice(index, index + wordCount))
            // Put index at the last position of the current word
            index += wordCount
        }
        return decoded
    }
}

// 4#neet4#code4#love3#you

// ["neet","code","love","you|too"]
// 
// Check the first seprator # 
// 2nd point to hold the current index which is 0


// 4#neet4#code4#love6#you|too
// First pointer (Find #) => 1 + 4 stop at 5
// Second pointer (Find word length) 0,1 => word length 
// 0, 1 => turn it to a number 400 

// First pointer at 3 (the first #) + 1
// output = ['neet', ]

