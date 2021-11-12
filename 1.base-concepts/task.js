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
  parseInt(percent);
  parseInt(contribution);
  parseInt(amount);
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
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
