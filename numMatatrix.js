/**
 * @describtion Range Sum Query 2D - Immutable
 **/

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var that = this;
    this.num = [];
    matrix.forEach(function (item, index) {
        that.num[index] = [];
        item.forEach(function (itemJ, indexJ) {
            if (index === 0) {
                that.num[index][indexJ] = indexJ > 0 ? that.num[index][indexJ - 1] + matrix[index][indexJ] : matrix[index][indexJ];
            } else if (indexJ === 0) {
                that.num[index][indexJ] = that.num[index - 1][indexJ] + matrix[index][indexJ];
            } else {
                that.num[index][indexJ] = that.num[index - 1][indexJ] + that.num[index][indexJ - 1] + matrix[index][indexJ] - that.num[index - 1][indexJ - 1];
            }
        });
    });
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (row1 > row2 || col1 > col2) return;
    var rl = this.num[row2][col2];
    var ru = col1 > 0 ? this.num[row2][col1 - 1] : 0;
    var ll = row1 > 0 ? this.num[row1 - 1][col2] : 0;
    var lu = (col1 > 0 && row1 > 0) ? this.num[row1 - 1][col1 - 1] : 0;
    console.log('rl:' + rl);
    console.log('ru:' + ru);
    console.log('ll:' + ll);
    console.log('lu:' + lu);
    console.log(rl - ru - ll + lu);

    return rl - ru - ll + lu;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];
var matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]];
var numMatrix = new NumMatrix(matrix);
//numMatrix.sumRegion(0, 1, 2, 3);
//numMatrix.sumRegion(1, 2, 3, 4);
numMatrix.sumRegion(2, 1, 4, 3);
numMatrix.sumRegion(1, 1, 2, 2);
numMatrix.sumRegion(1, 2, 2, 4);
numMatrix.sumRegion(0, 0, 2, 2);
numMatrix.sumRegion(1, 0, 2, 2);
