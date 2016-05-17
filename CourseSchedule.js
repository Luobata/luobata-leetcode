/**
 * @description Course Schedule  No.217
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var console = require('better-console');
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length < 2) return true;
    var queue = {};
    var number = 0;
    for (var i = 0; i < prerequisites.length; i++) {
        var num = prerequisites[i][1];
        var inp = prerequisites[i][0];
        if (queue[num]) {
            queue[num].num++;
        } else {
            queue[num] = {
                num: 1,
                output: []
            };
            number++;
        }
        if (queue[inp]) {
            queue[inp].output.push(num);
        } else {
            queue[inp] = {
                num: 0,
                output: [num]
            };
            number++;
        }
    }
    var deleteI = function () {
        var flag = false;
        for (var k in queue) {
            if(queue[k].num === 0) {
                for (var i = 0; i < queue[k].output.length; i++) {
                    queue[queue[k].output[i]].num--;
                }
                //queue[k].output.forEach(function (item, index) {
                //    queue[item].num--;
                //});
                delete queue[k];
                number--;
                flag = true;
            }
        }
        if (flag) deleteI();
    };
    deleteI();

    return !number;
};

var a = canFinish(3,
[[1,0],[2,0]]);
console.log(a);
var a = canFinish(2, [[1,0],[0,1]]);
console.log(a);

