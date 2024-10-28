import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useTransactions } from '../hooks/useTransactions';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';
import { TransactionFilters } from './TransactionFilters';
import { TransactionStats } from './TransactionStats';
import { exportToCSV } from '../utils/export';
import {FilterOptions} from "../types/transaction"


const FinanceLogger: React.FC = () => {
  const { transactions, addTransaction } = useTransactions();
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    sortBy: '',
    sortOrder: '',
    search: '',
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
};

  const filteredTransactions = transactions
    .filter(t => {
      if (filters.type !== 'all' && t.type !== filters.type) return false;
      if (filters.category !== 'all' && t.category !== filters.category) return false;
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return (
          t.toFrom.toLowerCase().includes(searchLower) ||
          t.details.toLowerCase().includes(searchLower)
        );
      }
      return true;
    })
    .sort((a, b) => {
      const modifier = filters.sortOrder === 'asc' ? 1 : -1;
      if (filters.sortBy === 'date') {
        return (b.date.getTime() - a.date.getTime()) * modifier;
      }
      return (b.amount - a.amount) * modifier;
    });

  const handleExport = () => {
    exportToCSV(filteredTransactions);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Button onClick={handleExport} className="flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <TransactionStats transactions={filteredTransactions} />
      <TransactionForm onSubmit={addTransaction} />
      <TransactionFilters filters={filters} onFilterChange={handleFilterChange} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

export default FinanceLogger;