import React, { useState } from 'react';
import './index.css';
import AddTransaction from './components/AddTransaction';
import BalanceSummary from './components/BalanceSummary';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(tx => tx.id !== id));
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <BalanceSummary transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
