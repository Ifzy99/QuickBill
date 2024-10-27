import React from 'react';
import { useTransactions } from '../hooks/useTransactions';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

const FinanceLogger: React.FC = () => {
  const { transactions, addTransaction } = useTransactions();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <TransactionForm onSubmit={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default FinanceLogger;