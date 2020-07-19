const arrayMap = <T, U>(
  array: T[],
  callback: (item: T, index: number, arr: T[]) => U
): U[] => {
  const length = array.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
};
export = arrayMap;
