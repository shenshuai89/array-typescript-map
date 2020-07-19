var arrayMap = require("../dist/arraymap-ts");
console.log(arrayMap([1, 2], function (item, index, arr) {
    return item + 1;
}));
