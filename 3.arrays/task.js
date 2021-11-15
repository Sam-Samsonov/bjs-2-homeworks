function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every((item) => arr1[item] === arr2[item]);

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => (item > 0) && (item % 3 === 0)).map((item) => item * 10);

  return resultArr;
}
