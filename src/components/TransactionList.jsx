import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  const transactionItems = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
  ));

  return (
    <div>
      <div>
        <div>Date</div>
        <div>Description</div>
        <div>Category</div>
        <div>Amount</div>
      </div>
      {transactionItems}
    </div>
  );
};

export default TransactionList;
