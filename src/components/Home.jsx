import { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import Search from './Search';


const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error));
  }, []);

  const addTransaction = (newTransaction) => {
    fetch("http://localhost:3000/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(res => res.json())
      .then(data => setTransactions([...transactions, data]))
      .catch(error => console.log(error));
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:3001/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTransactions(transactions.filter(transaction => transaction.id !== id)))
      .catch(error => console.log(error));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>Bank of Flatiron</header>
      <TransactionForm addTransaction={addTransaction} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default Home;
