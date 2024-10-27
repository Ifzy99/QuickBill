import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown } from 'lucide-react';
import { Transaction } from '../types/transction';
import { TransactionCard } from './TransactionCard';

interface Props {
  transactions: Transaction[];
}

export const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <ArrowUpDown className="mr-2 h-5 w-5" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <TransactionCard 
              key={transaction.id} 
              transaction={transaction} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
