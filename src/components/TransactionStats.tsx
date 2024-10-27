import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Transaction } from '../types/transaction';
import { formatCurrency } from '../utils/formatters';

interface Props {
  transactions: Transaction[];
}

export const TransactionStats: React.FC<Props> = ({ transactions }) => {
  const stats = transactions.reduce((acc, t) => ({
    totalInvoices: acc.totalInvoices + (t.type === 'invoice' ? 1 : 0),
    totalPayments: acc.totalPayments + (t.type === 'payment' ? 1 : 0),
    invoiceAmount: acc.invoiceAmount + (t.type === 'invoice' ? t.amount : 0),
    paymentAmount: acc.paymentAmount + (t.type === 'payment' ? t.amount : 0),
  }), {
    totalInvoices: 0,
    totalPayments: 0,
    invoiceAmount: 0,
    paymentAmount: 0,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Total Invoices</div>
          <div className="text-2xl font-bold">{stats.totalInvoices}</div>
          <div className="text-sm text-muted-foreground">{formatCurrency(stats.invoiceAmount)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Total Payments</div>
          <div className="text-2xl font-bold">{stats.totalPayments}</div>
          <div className="text-sm text-muted-foreground">{formatCurrency(stats.paymentAmount)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Balance</div>
          <div className="text-2xl font-bold">{formatCurrency(stats.invoiceAmount - stats.paymentAmount)}</div>
          <div className="text-sm text-muted-foreground">Net Amount</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Total Transactions</div>
          <div className="text-2xl font-bold">{stats.totalInvoices + stats.totalPayments}</div>
          <div className="text-sm text-muted-foreground">All Time</div>
        </CardContent>
      </Card>
    </div>
  );
};