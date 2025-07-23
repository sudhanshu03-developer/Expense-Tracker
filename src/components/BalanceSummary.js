import React from 'react';

const BalanceSummary = ({ transactions }) => {
  const amounts = transactions.map(tx => tx.amount);
  const income = amounts
    .filter(a => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <>
      <h3>Your Balance</h3>
      <h2>₹{total}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Income</h4>
          <p style={{ color: 'green' }}>+₹{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p style={{ color: 'red' }}>-₹{expense}</p>
        </div>
      </div>
    </>
  );
};

export default BalanceSummary;
