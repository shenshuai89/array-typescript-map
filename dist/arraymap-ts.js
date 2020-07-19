"use strict";
var arrayMap = function (array, callback) {
    var length = array.length;
    var newArr = [];
    for (var i = 0; i < length; i++) {
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
};
module.exports = arrayMap;
