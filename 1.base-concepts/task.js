function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let s = amount - contribution;
  let n = Math.ceil((date - Date.now())/(24 * 60 * 60 * 1000 * 30.42));
  let p = (percent / 100) * (1 / 12);

  let monthlyPayment = s * (p + p / (((1 + p) ** n)-1));
  totalAmount = (monthlyPayment * n).toFixed(2)

  return totalAmount;
}
