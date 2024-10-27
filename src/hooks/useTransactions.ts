import { useState, useEffect } from 'react';
import { Transaction } from '../types/transction';
import { saveTransactions, loadTransactions } from '../lib/storage';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loaded = loadTransactions();
    setTransactions(loaded);
  }, []);

  const addTransaction = (transaction: Transaction) => {
    const updated = [transaction, ...transactions];
    setTransactions(updated);
    saveTransactions(updated);
  };

  return { transactions, addTransaction };
};