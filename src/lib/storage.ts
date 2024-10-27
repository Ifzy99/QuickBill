import { Transaction } from '../types/transaction';

const STORAGE_KEY = 'quickbill_transactions';

export const saveTransactions = (transactions: Transaction[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const loadTransactions = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  
  const transactions = JSON.parse(data);
  return transactions.map((t: any) => ({
    ...t,
    date: new Date(t.date)
  }));
};