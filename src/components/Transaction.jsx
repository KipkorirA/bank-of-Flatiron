

const Transaction = ({ transaction }) => {
  return (
    <div>
      <div>{transaction.date}</div>
      <div>{transaction.description}</div>
      <div>{transaction.category}</div>
      <div>{transaction.amount}</div>
    </div>
  );
}

export default Transaction;
