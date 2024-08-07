import { useEffect, useState } from 'react'
import TransactionList from './TransactionList'
import TransactionForm from './TransactionForm'
import Search from './Search'
import Sort from './Sort'
import '../styles.css'


const Home = () => {
  const [transactions, setTransactions] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('')
  const [showTransactions, setShowTransactions] = useState(false)

  useEffect(() => {
    fetch("https://staff-backend-n4rx.vercel.app/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error))
  }, []);

  const addTransaction = (newTransaction) => {
    fetch("https://staff-backend-n4rx.vercel.app/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(res => res.json())
      .then(data => setTransactions([...transactions, data]))
      .catch(error => console.log(error))
  };

  const deleteTransaction = (id) => {
    fetch(`https://staff-backend-n4rx.vercel.app/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTransactions(transactions.filter(transaction => transaction.id !== id)))
      .catch(error => console.log(error))
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortOption === 'category') {
      return a.category.localeCompare(b.category)
    } else if (sortOption === 'description') {
      return a.description.localeCompare(b.description)
    } else {
      return new Date(a.date) - new Date(b.date)
    }
  });

  const filteredTransactions = sortedTransactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
    <header>Bank of Flatiron</header>
    <TransactionForm addTransaction={addTransaction} />
    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Sort sortOption={sortOption} onSortChange={handleSortChange} />
    <button onClick={() => setShowTransactions(!showTransactions)}>
      {showTransactions? 'Hide Transactions History' : 'Show Transactions History'}
    </button>
    {showTransactions &&( 
       <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    )
         
    }
 </div>
  )
}

export default Home;
