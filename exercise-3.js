const balance = (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) => {
  let accountBalance = openingSum;
  let monthlyInterest, monthlyTax;

  for (let i = 1; i <= numMonths; i++) {
    monthlyInterest = (interestRate * accountBalance) / 100;
    monthlyTax =
      accountBalance > taxFreeLimit
        ? (taxRate * (accountBalance - taxFreeLimit)) / 100
        : 0;
    accountBalance = accountBalance + monthlyInterest - monthlyTax;
  }

  return accountBalance;
};

balance(10000, 1, 20000, 1, 2);
balance(25000, 2, 20000, 1, 2);
balance(19800, 2, 20000, 1, 2);
