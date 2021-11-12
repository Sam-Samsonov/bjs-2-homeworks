function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
//  if (((percent > '!') === true) && ((percent > 'a') === false)) {
//    percent = +percent;
    if (typeof percent !== 'number') {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
//    }
  }
//  if (((contribution > '!') === true) && ((contribution > 'a') === false)) {
//    contribution = +contribution;
    if (typeof contribution !== 'number') {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
//    }
  }
//  if (((amount > '!') === true) && ((amount > 'a') === false)) {
//    amount = +amount;
    if (typeof amount !== 'number') {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
//    }
  }

  let totalAmount;
  let s = amount - contribution;
//  let n = Math.ceil((date - Date.now())/(24 * 60 * 60 * 1000 * 30.42));
  let n = (date.getMonth() - new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) * 12);
  let p = (percent / 100) * (1 / 12);

  let monthlyPayment = s * (p + p / (((1 + p) ** n) - 1));
  totalAmount = +(monthlyPayment * n).toFixed(2);

  return totalAmount;
}
