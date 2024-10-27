import { Transaction } from '../types/transction';
import { formatDate, formatCurrency } from './formatters';

export const exportToCSV = (transactions: Transaction[]): void => {
  const headers = ['Date', 'Type', 'Category', 'To/From', 'Details', 'Amount'];
  const data = transactions.map(t => [
    formatDate(t.date),
    t.type,
    t.category,
    t.toFrom,
    t.details,
    formatCurrency(t.amount)
  ]);

  const csv = [
    headers.join(','),
    ...data.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quickbill-export-${formatDate(new Date())}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};