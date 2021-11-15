// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let res;
  for (n = 0; n < arrOfArr.length; n++) {
    res = func(arrOfArr[n]);
    if (res > max) {
      max = res;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let dif;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }else if (arr[i] > max) {
      max = arr[i];
    }
  }

  dif = max - min;

  return dif;
}
