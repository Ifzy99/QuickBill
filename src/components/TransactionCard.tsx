import React from 'react';
import { Transaction } from '../types/transction';
import { formatCurrency, formatDate } from '../utils/formatters';

interface Props {
  transaction: Transaction;
}

export const TransactionCard: React.FC<Props> = ({ transaction }) => {
  return (
    <div
      className={`p-4 rounded-lg border ${
        transaction.type === 'invoice' 
          ? 'bg-blue-50 border-blue-200' 
          : 'bg-green-50 border-green-200'
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-slate-800">
            {transaction.toFrom}
          </h4>
          <p className="text-sm text-slate-600">
            {transaction.details}
          </p>
          <p className="text-xs text-slate-500">
            {formatDate(transaction.date)}
          </p>
        </div>
        <span className={`font-bold ${
          transaction.type === 'invoice' 
            ? 'text-blue-600' 
            : 'text-green-600'
        }`}>
          {formatCurrency(transaction.amount)}
        </span>
      </div>
    </div>
  );
};