
const Transaction = ({ transaction, onDelete }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-cell">{new Date(transaction.date).toLocaleDateString()}</div>
      <div className="transaction-cell">{transaction.description}</div>
      <div className="transaction-cell">{transaction.category}</div>
      <div className="transaction-cell">{`$${transaction.amount.toFixed(2)}`}</div>
      <div className="transaction-cell">
        <button className="transaction-button" onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Transaction
