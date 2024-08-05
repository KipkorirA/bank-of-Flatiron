
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  const transactionItems = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
  ));

  return (
      <div className="transaction-container">
      <div className="transaction-header">
        <div className="transaction-cell">Date</div>
        <div className="transaction-cell">Description</div>
        <div className="transaction-cell">Category</div>
        <div className="transaction-cell">Amount</div>
        <div className="transaction-cell">Actions</div>
      </div>
      {transactionItems}
    </div>
  );
};

export default TransactionList;
