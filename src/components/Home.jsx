import { useEffect, useState } from 'react';
import TransactionList from './TransactionList';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Home;
