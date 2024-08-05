
const Transaction = ({ transaction, onDelete }) => {
  return (
    <div>
      <div>{transaction.date}</div>
      <div>{transaction.description}</div>
      <div>{transaction.category}</div>
      <div>{transaction.amount}</div>
      <button onClick={() => onDelete(transaction.id)}>Delete</button>
    </div>
  );
};

export default Transaction;
