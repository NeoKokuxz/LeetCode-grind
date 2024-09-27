/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let seen = new Set()
    // Check what's 
    // current row + current column + current sub box for the character
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let current = board[i][j]
                let row = current + " found in row " + i
                let column = current + " found in column " + j
                let subBox = current + "found in subBox "  + Math.floor(i / 3) + " x " + Math.floor(j/3)
                if(seen.has(row) || seen.has(column) || seen.has(subBox)) {
                    return false
                } else {
                    seen.add(row)
                    seen.add(column)
                    seen.add(subBox)
                }
            }
        }
    }
    return true
};

// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// 3 functions to store:
// 1 - check row 
// 2 - check column
// 3 - check sub box

// Subbox check 
// 0/3 0/3 = 0 
// 0/3 1/3 =0.333 = Math.floor(0)
// 0/3 2/3 => 0

// 00 01 02 | 03 04 05 
// 10 11 12 | 13 14 15
// 20 21 22 | 23 24 25

// 00 00 00 | 01 01 01 
// 00 00 00 | 01 01 01
// 00 00 00 | 01 01 01


