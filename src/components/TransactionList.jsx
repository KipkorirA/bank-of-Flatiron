
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
  const transactionItems = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} />
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
}

export default TransactionList;
