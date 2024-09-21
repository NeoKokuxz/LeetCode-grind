/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}  22%
 */
var isAnagram = function(s, t) {
    // Sort both String and compare S T 1 by 1
    if(s.length !== t.length ) return false

    // Use map to store each letter and compare it with the 2nd string
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) !== t.charAt(i)) {
            return false
        }
    }

    return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean} 83%
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length ) return false

    // Use map to store each letter and compare it with the 2nd string
    let map = new Map()

    for(let i = 0; i < s.length; i++) {
        if(!map.get(s.charAt(i))) {
            map.set(s.charAt(i), 1) 
        } else {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
        }
    }

    for(let i = 0; i < t.length; i++) {
         if(!map.get(t.charAt(i))) {
            // didn't see this character before
            return false
        } else if(map.get(t.charAt(i)) > 0) { 
            // If the current character count is greather than 0, yes, take 1 out
            map.set(t.charAt(i), map.get(t.charAt(i)) - 1)
        } else if(map.get(t.charAt(i)) <= 0) {
            // If current chracter count is 0 or below
            return false
        } 
    }
    return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean} 60%
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length ) return false

    // Use map to store each letter and compare it with the 2nd string
    let map = new Map()

    for(let curr in s.split("")) {
        map.set( s[curr], map.get(s[curr]) ?  map.get(s[curr]) + 1 : 1)
    }

    for(let curr in t.split("")) {
        map.set( t[curr], map.get(t[curr]) ?  map.get(t[curr]) -1 : -1)
    }

    for(let [key, value] of map) {
        if(value !== 0) {
            return false
        }
    }

    return true

}
