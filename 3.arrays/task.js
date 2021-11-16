function compareArrays(arr1, arr2) {

  return result = arr1.every(elem => (arr2[elem] === arr1[elem]) && (arr2.length === arr1.length));

//  return result = arr1.every((item) => arr1[item] === arr2[item]);
}

function advancedFilter(arr) {

  return resultArr = arr.filter((elem) => (elem > 0) && (elem % 3 === 0)).map((elem) => elem * 10);
}
