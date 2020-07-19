const arrayMap = require("../dist/arraymap-ts");
console.log(
  arrayMap([1, 2], (item: number, index: number, arr: number[]): number => {
    return item + 1;
  })
);
