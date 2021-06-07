/*
 * @param {string} moves
 * @return {boolean}
 */


var judgeCircle = function (moves) {
    var x = 0;
    var y = 0;

        for (i = 0; i < moves.length; i++){
        switch (moves[i]) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "R":
                x++;
                break;
            case "L":
                x--;

        }
    }

    return x === 0 && y === 0;
};

var moves;
moves= "UD";
// moves = "LDRRLRUULR";

console.log(judgeCircle(moves))
