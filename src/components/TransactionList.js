import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map(tx => (
          <li
            key={tx.id}
            className={`transaction ${tx.amount > 0 ? 'positive' : 'negative'}`}
          >
            <span>{tx.text}</span>
            <span>₹{tx.amount}</span>
            <button onClick={() => deleteTransaction(tx.id)} style={{ marginLeft: '10px', background: 'red' }}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
