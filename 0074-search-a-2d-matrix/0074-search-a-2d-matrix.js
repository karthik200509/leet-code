/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
   let row = matrix.length;
   let colm = matrix[0].length;

   for(let i=0;i<row;i++){
    for(let j=0;j<colm;j++){
        if(matrix[i][j]===target){
            return true;
        }
    }
   }
   return false;
};