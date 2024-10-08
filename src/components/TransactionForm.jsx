import { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction)
    setDate('')
    setDescription('')
    setCategory('')
    setAmount('')
  };

  return (
    <form className="form-header" onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required/>
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
