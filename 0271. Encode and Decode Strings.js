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

// 4#neet4#code4#love3#you

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let index = 0; // Start position
        while ( index < str.length) {
            // Find the next # based on the current index
            let pos = str.indexOf('#', index)  
            let length = Number(str.slice(index, pos))
            index = pos + 1 // Where word starts 
            let word = str.slice(index, index + length)
            decoded.push(word)
            // Update the index to the last word position 
            index += length 
        }
        return decoded
    }
}
