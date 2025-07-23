import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction..."
        />
        <label>Amount (use - for expense)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
