import { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import Search from './Search';
import Sort from './Sort';


const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortOption === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortOption === 'description') {
      return a.description.localeCompare(b.description);
    } else {
      return new Date(a.date) - new Date(b.date); // Default to date sorting
    }
  });

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>Bank of Flatiron</header>
      <TransactionForm addTransaction={addTransaction} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sort sortOption={sortOption} onSortChange={handleSortChange} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default Home;
