/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let string of strs) {
        let sortedKey = string.split('').sort().join('');
        // Check map if exist or not
        if(!map.get(sortedKey)) {
            map.set(sortedKey, [])
        }
        map.get(sortedKey).push(string)
    }
    return Array.from(map.values())
};

// strs = ["eat","tea","tan","ate","nat","bat"]

// loop through strs
// sortedKey = aet 

// map ? no -> push it to map 
// map ? yes -> push it to existed group

// key = aet and value = eat, tea
