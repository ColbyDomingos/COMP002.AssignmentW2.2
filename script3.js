// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let size = 8; // Changing this will make it larger or smaller
let board = " "

for (let row = 0; row < size; row++){
    for (let col = 0; col < size; col++){
        if ((row + col) % 2 === 0){
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"; // needs to start a new line for the board to continue
}

console.log(board);